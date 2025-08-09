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
    const { supportPercentage, totalVotes } = body

    // Get the report details
    const report = await prisma.report.findUnique({
      where: { id: reportId }
    })

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 })
    }

    // Schedule meeting 7 days from now
    const meetingDate = new Date()
    meetingDate.setDate(meetingDate.getDate() + 7)

    // Update report with meeting information
    const updatedReport = await prisma.report.update({
      where: { id: reportId },
      data: {
        meetingScheduled: true,
        meetingDate: meetingDate,
        status: 'UNDER_REVIEW',
        updatedAt: new Date()
      }
    })

    // Create meeting record
    const meeting = await prisma.communityMeeting.create({
      data: {
        reportId: reportId,
        title: `Community Meeting: ${report.title}`,
        description: `Community meeting scheduled to discuss the reported issue with ${supportPercentage}% community support from ${totalVotes} votes.`,
        scheduledDate: meetingDate,
        location: report.address || 'TBD',
        organizer: session.user.id,
        status: 'SCHEDULED',
        meetingType: 'PUBLIC_CONSULTATION',
        agenda: [
          'Review of community report and evidence',
          'Discussion of legal implications',
          'Community input and feedback',
          'Next steps and action items'
        ]
      }
    })

    // Log the activity
    await prisma.reportActivity.create({
      data: {
        reportId: reportId,
        userId: session.user.id,
        action: 'MEETING_SCHEDULED',
        description: `Community meeting scheduled for ${meetingDate.toLocaleDateString()}`,
        metadata: {
          meetingId: meeting.id,
          supportPercentage,
          totalVotes
        }
      }
    })

    return NextResponse.json({
      message: "Community meeting scheduled successfully",
      meeting: {
        id: meeting.id,
        title: meeting.title,
        scheduledDate: meeting.scheduledDate,
        location: meeting.location,
        status: meeting.status
      },
      report: {
        id: updatedReport.id,
        meetingScheduled: updatedReport.meetingScheduled,
        meetingDate: updatedReport.meetingDate,
        status: updatedReport.status
      }
    })

  } catch (error) {
    console.error("Meeting scheduling error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
