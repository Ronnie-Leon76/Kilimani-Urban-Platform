import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id;

    // Get user's reports
    const userReports = await prisma.report.findMany({
      where: { userId: userId },
      include: {
        User: {
          select: { name: true, email: true }
        }
      },
      orderBy: { createdAt: "desc" },
      take: 10
    })

    // Get community analytics
    const [
      totalReports,
      resolvedReports,
      activeUsers,
      reportsByType
    ] = await Promise.all([
      // Total reports in the community
      prisma.report.count(),
      
      // Resolved reports
      prisma.report.count({
        where: { status: "RESOLVED" }
      }),
      
      // Active users (users who have logged in within last 30 days)
      prisma.user.count({
        where: {
          updatedAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
          }
        }
      }),
      
      // Reports by type for distribution
      prisma.report.groupBy({
        by: ['type'],
        _count: {
          type: true
        }
      })
    ])

    // Calculate issue distribution percentages
    const typeDistribution = reportsByType.reduce((acc, item) => {
      const percentage = totalReports > 0 ? Math.round((item._count.type / totalReports) * 100) : 0
      acc[item.type.toLowerCase()] = percentage
      return acc
    }, {} as Record<string, number>)

    // Get active consultations for the user
    const activeConsultations = await prisma.publicConsultation.findMany({
      where: {
        status: "active",
        endDate: { gte: new Date() }
      },
      include: {
        ConsultationVote: {
          where: { userId },
          select: { vote: true }
        },
        ConsultationComment: {
          where: { userId },
          select: { id: true }
        },
        _count: {
          select: {
            ConsultationVote: true,
            ConsultationComment: true
          }
        }
      },
      orderBy: { createdAt: "desc" },
      take: 5
    })

    // Process user's participation data
    const userParticipation = {
      consultationsJoined: await prisma.consultationVote.count({
        where: { userId }
      }),
      commentsPosted: await prisma.consultationComment.count({
        where: { userId }
      }),
      issuesReported: await prisma.report.count({
        where: { userId: userId }
      })
    }

    // Format reports data
    const formattedReports = userReports.map(report => ({
      id: report.id,
      title: report.title,
      type: report.type,
      status: report.status,
      priority: report.priority,
      location: report.address || 'Location not specified',
      createdAt: report.createdAt.toLocaleDateString(),
      reporter: report.User?.name || 'Anonymous'
    }))

    // Format consultation data
    const formattedConsultations = activeConsultations.map(consultation => {
      const userVoted = consultation.ConsultationVote.length > 0
      const userCommented = consultation.ConsultationComment.length > 0
      
      return {
        id: consultation.id,
        title: consultation.title,
        description: consultation.description,
        endDate: consultation.endDate.toLocaleDateString(),
        participants: consultation._count.ConsultationVote,
        comments: consultation._count.ConsultationComment,
        userParticipated: userVoted || userCommented,
        userVote: consultation.ConsultationVote[0]?.vote || null
      }
    })

    return NextResponse.json({
      reports: formattedReports,
      analytics: {
        totalReports,
        resolvedReports,
        activeUsers,
        issueDistribution: {
          water: typeDistribution.water_shortage || 0,
          infrastructure: typeDistribution.infrastructure || 0,
          flooding: typeDistribution.flooding || 0,
          waste: typeDistribution.waste_management || 0
        }
      },
      consultations: formattedConsultations,
      participation: userParticipation
    })

  } catch (error) {
    console.error("Resident dashboard API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
