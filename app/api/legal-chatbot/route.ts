import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { LawAnalysisService } from "@/lib/law-analysis"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { message } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Get law information from the AI assistant
    const response = await LawAnalysisService.getLawInformation(message)

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error("Legal chatbot API error:", error)
    return NextResponse.json(
      { error: "Failed to get legal information" },
      { status: 500 }
    )
  }
}
