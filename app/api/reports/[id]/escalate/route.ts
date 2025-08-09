import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is government official or admin
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!user || !["ADMIN", "GOVERNMENT_OFFICIAL"].includes(user.role)) {
      return NextResponse.json({ 
        error: "Forbidden - Government access required" 
      }, { status: 403 })
    }

    const reportId = params.id
    const body = await request.json()
    const { action, votesFor, votesAgainst, supportPercentage } = body

    // Get the report details
    const report = await prisma.report.findUnique({
      where: { id: reportId },
      include: {
        User: {
          select: { name: true, email: true }
        }
      }
    })

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 })
    }

    // Create escalation record
    const escalation = await prisma.reportEscalation.create({
      data: {
        reportId: reportId,
        escalatedBy: session.user.id,
        escalationType: action,
        escalationLevel: 'WARD_ADMINISTRATOR',
        votingData: {
          votesFor,
          votesAgainst,
          supportPercentage,
          totalVotes: votesFor + votesAgainst
        },
        escalationReason: `Case escalated due to ${supportPercentage}% community support with ${votesFor + votesAgainst} total votes.`,
        escalatedAt: new Date(),
        status: 'PENDING',
        priority: supportPercentage >= 70 ? 'URGENT' : 'HIGH'
      }
    })

    // Update report status
    await prisma.report.update({
      where: { id: reportId },
      data: {
        status: 'ESCALATED',
        updatedAt: new Date()
      }
    })

    // Log the escalation activity
    await prisma.reportActivity.create({
      data: {
        reportId: reportId,
        userId: session.user.id,
        action: 'ESCALATED',
        description: `Report escalated to ward administrators with ${supportPercentage}% community support`,
        metadata: {
          escalationId: escalation.id,
          votingData: { votesFor, votesAgainst, supportPercentage }
        }
      }
    })

    return NextResponse.json({
      message: "Report escalated successfully",
      escalation: {
        id: escalation.id,
        level: escalation.escalationLevel,
        priority: escalation.priority,
        escalatedAt: escalation.escalatedAt
      }
    })

  } catch (error) {
    console.error("Escalation error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
