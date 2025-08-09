import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is government official or admin
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true, name: true }
    })

    if (!user || !["ADMIN", "GOVERNMENT_OFFICIAL"].includes(user.role)) {
      return NextResponse.json({ 
        error: "Forbidden - Government access required" 
      }, { status: 403 })
    }

    const { reportId, action, data } = await request.json()

    if (!reportId || !action) {
      return NextResponse.json({ 
        error: "Report ID and action are required" 
      }, { status: 400 })
    }

    const report = await prisma.report.findUnique({
      where: { id: reportId },
      include: {
        User: { select: { name: true, email: true } },
        ReportVote: { include: { User: { select: { name: true } } } }
      }
    })

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 })
    }

    switch (action) {
      case "schedule_meeting":
        {
          const { meetingDate, notes } = data
          
          if (!meetingDate) {
            return NextResponse.json({ 
              error: "Meeting date is required" 
            }, { status: 400 })
          }

          const updatedReport = await prisma.report.update({
            where: { id: reportId },
            data: {
              meetingScheduled: true,
              meetingDate: new Date(meetingDate),
              meetingMinutes: notes || `Meeting scheduled by ${user.name} on ${new Date().toISOString()}`
            }
          })

          return NextResponse.json({
            success: true,
            message: "Meeting scheduled successfully",
            meetingDate: updatedReport.meetingDate
          })
        }

      case "submit_verdict":
        {
          const { verdict, reasoning, newStatus } = data
          
          if (!verdict || !reasoning) {
            return NextResponse.json({ 
              error: "Verdict and reasoning are required" 
            }, { status: 400 })
          }

          const updatedReport = await prisma.report.update({
            where: { id: reportId },
            data: {
              finalVerdict: verdict,
              verdictDate: new Date(),
              status: newStatus || report.status,
              meetingMinutes: `${report.meetingMinutes || ""}\n\nFINAL VERDICT (${new Date().toLocaleDateString()}):\nDecision: ${verdict}\nReasoning: ${reasoning}\nDecided by: ${user.name}`
            }
          })

          // Create a report update entry
          await prisma.reportUpdate.create({
            data: {
              id: `${reportId}-${Date.now()}`, // Generate a unique id or use a suitable method
              message: `Official verdict submitted: ${verdict}. Reasoning: ${reasoning}`,
              status: newStatus || report.status,
              updatedBy: user.name || "Government Official",
              Report: {
                connect: { id: reportId }
              }
            }
          })
          
          return NextResponse.json({
            success: true,
            message: "Verdict submitted successfully",
            verdict: updatedReport.finalVerdict,
            verdictDate: updatedReport.verdictDate
          })
        }

      case "update_meeting_minutes":
        {
          const { minutes } = data
          
          if (!minutes) {
            return NextResponse.json({ 
              error: "Meeting minutes are required" 
            }, { status: 400 })
          }

          const updatedReport = await prisma.report.update({
            where: { id: reportId },
            data: {
              meetingMinutes: `${report.meetingMinutes || ""}\n\nMEETING UPDATE (${new Date().toLocaleDateString()}):\n${minutes}\nUpdated by: ${user.name}`
            }
          })

          return NextResponse.json({
            success: true,
            message: "Meeting minutes updated successfully"
          })
        }

      default:
        return NextResponse.json({ 
          error: "Invalid action" 
        }, { status: 400 })
    }

  } catch (error) {
    console.error("Meeting management error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const reportId = searchParams.get('reportId')

    if (!reportId) {
      return NextResponse.json({ error: "Report ID is required" }, { status: 400 })
    }

    const report = await prisma.report.findUnique({
      where: { id: reportId },
      select: {
        id: true,
        meetingScheduled: true,
        meetingDate: true,
        meetingMinutes: true,
        finalVerdict: true,
        verdictDate: true,
        priority: true,
        status: true,
        votesFor: true,
        votesAgainst: true,
        publicVotingEnabled: true,
        votingDeadline: true
      }
    })

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 })
    }

    return NextResponse.json({
      reportId: report.id,
      meeting: {
        scheduled: report.meetingScheduled,
        date: report.meetingDate,
        minutes: report.meetingMinutes,
        hasVerdict: !!report.finalVerdict
      },
      verdict: {
        decision: report.finalVerdict,
        date: report.verdictDate
      },
      voting: {
        enabled: report.publicVotingEnabled,
        deadline: report.votingDeadline,
        votesFor: report.votesFor,
        votesAgainst: report.votesAgainst,
        majorityReached: (report.votesFor + report.votesAgainst) >= 10 && 
                        (report.votesFor / (report.votesFor + report.votesAgainst)) > 0.6
      },
      currentStatus: {
        priority: report.priority,
        status: report.status
      }
    })

  } catch (error) {
    console.error("Meeting info retrieval error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
