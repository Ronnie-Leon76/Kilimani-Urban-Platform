import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const reportId = params.id

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

    return NextResponse.json({
      report: {
        id: report.id,
        title: report.title,
        description: report.description,
        type: report.type,
        status: report.status,
        priority: report.priority,
        address: report.address,
        latitude: report.latitude,
        longitude: report.longitude,
        images: report.images,
        reporter: report.User?.name || 'Anonymous',
        reporterEmail: report.User?.email,
        createdAt: report.createdAt.toISOString(),
        updatedAt: report.updatedAt.toISOString(),
        resolvedAt: report.resolvedAt?.toISOString(),
        infringedLaws: report.infringedLaws,
        lawAnalysisDate: report.lawAnalysisDate?.toISOString(),
        publicVotingEnabled: report.publicVotingEnabled,
        votesFor: report.votesFor,
        votesAgainst: report.votesAgainst,
        votingDeadline: report.votingDeadline?.toISOString(),
        meetingScheduled: report.meetingScheduled,
        meetingDate: report.meetingDate?.toISOString(),
        finalVerdict: report.finalVerdict,
        verdictDate: report.verdictDate?.toISOString()
      }
    })

  } catch (error) {
    console.error("Error fetching report:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user has permission to update reports
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!user || !["ADMIN", "GOVERNMENT_OFFICIAL"].includes(user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const reportId = params.id
    const body = await request.json()

    // Validate status if provided
    const validStatuses = ["PENDING", "IN_PROGRESS", "RESOLVED", "REJECTED"]
    if (body.status && !validStatuses.includes(body.status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    // Prepare update data
    const updateData: any = {}
    if (body.status) updateData.status = body.status
    if (body.priority) updateData.priority = body.priority
    if (body.resolvedAt !== undefined) {
      updateData.resolvedAt = body.resolvedAt ? new Date(body.resolvedAt) : null
    }
    
    // If resolving, set resolvedAt
    if (body.status === "RESOLVED" && !body.resolvedAt) {
      updateData.resolvedAt = new Date()
    }

    const updatedReport = await prisma.report.update({
      where: { id: reportId },
      data: updateData,
      include: {
        User: {
          select: { name: true, email: true }
        }
      }
    })

    return NextResponse.json({
      id: updatedReport.id,
      title: updatedReport.title,
      status: updatedReport.status,
      priority: updatedReport.priority,
      reporter: updatedReport.User?.name || 'Anonymous',
      updatedAt: updatedReport.updatedAt.toISOString(),
      resolvedAt: updatedReport.resolvedAt?.toISOString() || null
    })

  } catch (error) {
    console.error("Error updating report:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user has permission to delete reports (admin only)
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const reportId = params.id

    await prisma.report.delete({
      where: { id: reportId }
    })

    return NextResponse.json({ message: "Report deleted successfully" })

  } catch (error) {
    console.error("Error deleting report:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
