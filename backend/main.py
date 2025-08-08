from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from pydantic import BaseModel
from typing import List
from datetime import datetime
from openai import OpenAI
import os
import json
import asyncpg
import boto3
from twilio.rest import Client as TwilioClient
from dotenv import load_dotenv
from contextlib import asynccontextmanager

# Load environment variables early
load_dotenv()

# OpenAI API config
base_url = os.getenv("BASE_URL")
OpenAI.api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI()

# Database URL
DATABASE_URL = os.getenv("DATABASE_URL")

# ---------------- Lifespan context manager ----------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    app.state.pool = await asyncpg.create_pool(DATABASE_URL)
    yield
    # Shutdown
    await app.state.pool.close()

# Create FastAPI app with lifespan
app = FastAPI(lifespan=lifespan)

# ---------------- Data Models ----------------
class IssueReport(BaseModel):
    description: str

class IssueResponse(BaseModel):
    id: int
    description: str
    priority: str
    solution: str
    created_at: datetime

# ---------------- Email/SMS Alerts ----------------
def send_email_alert(subject: str, body: str):
    ses = boto3.client(
        "ses",
        aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
        region_name=os.getenv("AWS_REGION"),
    )
    ses.send_email(
        Source=os.getenv("ALERT_EMAIL_FROM"),
        Destination={"ToAddresses": [os.getenv("ALERT_EMAIL_TO")]},
        Message={
            "Subject": {"Data": subject},
            "Body": {"Text": {"Data": body}},
        },
    )

def send_sms_alert(message: str):
    client = TwilioClient(
        os.getenv("TWILIO_ACCOUNT_SID"),
        os.getenv("TWILIO_AUTH_TOKEN")
    )
    client.messages.create(
        to=os.getenv("ALERT_SMS_TO"),
        from_=os.getenv("TWILIO_FROM_NUMBER"),
        body=message
    )

# ---------------- API Endpoints ----------------
@app.get("/api/issues", response_model=List[IssueResponse])
async def get_issues():
    async with app.state.pool.acquire() as conn:
        records = await conn.fetch(
            "SELECT id, description, priority, solution, created_at FROM issues ORDER BY created_at DESC"
        )
    return [IssueResponse(**r) for r in records]

@app.post("/api/report-issue", response_model=IssueResponse)
async def report_issue(issue: IssueReport):
    # LLM prompt for classification
    prompt = f"""
    You are a smart city assistant for the Kilimani Urban Platform.

    Your job:
    1. Read the reported issue from a resident.
    2. Assign a priority: low, medium, or high.
    3. Suggest a short, practical solution that can be executed quickly.

    ### Classification Guide:
    - LOW: Minor inconvenience, no safety risk, can be fixed anytime.
    - MEDIUM: Moderate disruption, could affect daily life, should be addressed soon.
    - HIGH: Serious issue, risk to safety, health, or infrastructure — immediate action required.

    ### Examples:

    Reported issue: "Street light not working on 5th Avenue."
    Response:
    {{
      "priority": "low",
      "solution": "Schedule an electrician to replace the faulty bulb within 48 hours."
    }}

    Reported issue: "Pothole causing traffic congestion at the main junction."
    Response:
    {{
      "priority": "medium",
      "solution": "Notify the road maintenance team to patch the pothole within the week."
    }}

    Reported issue: "Gas leak smell coming from building on Market Street."
    Response:
    {{
      "priority": "high",
      "solution": "Evacuate the area immediately and call the fire department to contain the leak."
    }}

    ### Now classify this:
    Reported issue: "{issue.description}"

    Respond in JSON only:
    {{
      "priority": "<low|medium|high>",
      "solution": "<short actionable advice>"
    }}
    """

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0
        )
        message = completion.choices[0].message.content

        try:
            parsed = json.loads(message)
        except json.JSONDecodeError:
            raise HTTPException(status_code=500, detail="Invalid LLM response format")

        async with app.state.pool.acquire() as conn:
            record = await conn.fetchrow(
                """
                INSERT INTO issues (description, priority, solution)
                VALUES ($1, $2, $3)
                RETURNING id, description, priority, solution, created_at
                """,
                issue.description, parsed["priority"], parsed["solution"]
            )

        # Send alerts for high-priority issues
        if parsed["priority"].lower() == "high":
            subject = "🚨 High Priority Urban Issue Reported"
            body = f"Issue: {issue.description}\nPriority: HIGH\nSolution: {parsed['solution']}"
            send_email_alert(subject, body)
            send_sms_alert(f"[HIGH PRIORITY] {issue.description} → {parsed['solution']}")

        # Broadcast to WebSocket clients
        await broadcast_issue({
            "id": record["id"],
            "description": record["description"],
            "priority": record["priority"],
            "solution": record["solution"],
            "created_at": record["created_at"].isoformat()
        })

        return IssueResponse(**record)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ---------------- WebSockets ----------------
admin_connections = []

@app.websocket("/ws/admin-alerts")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    admin_connections.append(websocket)
    try:
        while True:
            await websocket.receive_text()  # Keep alive
    except WebSocketDisconnect:
        admin_connections.remove(websocket)

async def broadcast_issue(issue_data: dict):
    for connection in admin_connections:
        try:
            await connection.send_json(issue_data)
        except:
            admin_connections.remove(connection)

print("FastAPI app is running with WebSocket support and LLM integration.")