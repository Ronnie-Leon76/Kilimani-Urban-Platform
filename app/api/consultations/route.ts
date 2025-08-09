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

    // Check if user is government official or admin
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!user || (user.role !== "GOVERNMENT_OFFICIAL" && user.role !== "ADMIN")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Get active consultations with vote counts and comments
    const activeConsultations = await prisma.publicConsultation.findMany({
      where: {
        status: "active",
        endDate: { gte: new Date() }
      },
      include: {
        ConsultationVote: {
          select: { vote: true }
        },
        ConsultationComment: {
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
      take: 10
    })

    // Get consultation statistics
    const [totalConsultations, activeCount] = await Promise.all([
      prisma.publicConsultation.count(),
      prisma.publicConsultation.count({
        where: {
          status: "active",
          endDate: { gte: new Date() }
        }
      })
    ])

    // Get total participants (unique users who voted or commented)
    const totalParticipants = await prisma.user.count({
      where: {
        OR: [
          {
            ConsultationVote: {
              some: {}
            }
          },
          {
            ConsultationComment: {
              some: {}
            }
          }
        ]
      }
    })

    // Calculate engagement rate
    const totalUsers = await prisma.user.count()
    const engagementRate = totalUsers > 0 ? Math.round((totalParticipants / totalUsers) * 100) : 0

    // Process consultation data
    const consultationsWithStats = activeConsultations.map(consultation => {
      const voteCounts = consultation.ConsultationVote.reduce((acc, vote) => {
        acc[vote.vote] = (acc[vote.vote] || 0) + 1
        return acc
      }, {} as Record<string, number>)

      const totalVotes = consultation.ConsultationVote.length
      const supportPercentage = totalVotes > 0 ? Math.round((voteCounts.support || 0) / totalVotes * 100) : 0
      const opposePercentage = totalVotes > 0 ? Math.round((voteCounts.oppose || 0) / totalVotes * 100) : 0
      const neutralPercentage = totalVotes > 0 ? Math.round((voteCounts.neutral || 0) / totalVotes * 100) : 0

      return {
        id: consultation.id,
        title: consultation.title,
        description: consultation.description,
        endDate: consultation.endDate.toISOString().split('T')[0],
        participants: consultation._count.ConsultationVote,
        comments: consultation._count.ConsultationComment,
        support: supportPercentage,
        oppose: opposePercentage,
        neutral: neutralPercentage
      }
    })

    return NextResponse.json({
      activeConsultations: consultationsWithStats,
      statistics: {
        totalConsultations,
        activeCount,
        totalParticipants,
        engagementRate
      }
    })

  } catch (error) {
    console.error("Consultations API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
