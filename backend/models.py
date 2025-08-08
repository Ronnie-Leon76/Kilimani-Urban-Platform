from pydantic import BaseModel
from datetime import datetime

class IssueReport(BaseModel):
    description: str

class IssueResponse(BaseModel):
    id: int
    description: str
    priority: str
    solution: str
    created_at: datetime
