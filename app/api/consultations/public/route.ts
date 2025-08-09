import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { v4 as uuidv4 } from 'uuid';

// GET: Fetch public consultations for residents
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const userId = session.user.id

    // Get active public consultations
    const consultations = await prisma.publicConsultation.findMany({
      where: {
        status: "ACTIVE",
        endDate: { gte: new Date() }
      },
      include: {
        ConsultationVote: {
          select: { 
            vote: true,
            userId: true
          }
        },
        ConsultationComment: {
          include: {
            User: {
              select: { name: true }
            }
          },
          orderBy: { createdAt: "desc" },
          take: 5 // Latest 5 comments
        },
        _count: {
          select: {
            ConsultationVote: true,
            ConsultationComment: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    })

    // Process consultation data with user participation info
    const consultationsWithStats = consultations.map(consultation => {
      const voteCounts = consultation.ConsultationVote.reduce((acc, vote) => {
        acc[vote.vote] = (acc[vote.vote] || 0) + 1
        return acc
      }, {} as Record<string, number>)

      const totalVotes = consultation.ConsultationVote.length
      const userVote = consultation.ConsultationVote.find(vote => vote.userId === userId)

      const daysRemaining = Math.ceil(
        (new Date(consultation.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      )

      return {
        id: consultation.id,
        title: consultation.title,
        description: consultation.description,
        startDate: consultation.startDate.toISOString(),
        endDate: consultation.endDate.toISOString(),
        daysRemaining: Math.max(0, daysRemaining),
        coordinates: consultation.coordinates,
        
        // Voting statistics
        totalVotes,
        supportVotes: voteCounts.SUPPORT || 0,
        opposeVotes: voteCounts.OPPOSE || 0,
        neutralVotes: voteCounts.NEUTRAL || 0,
        
        // Percentages
        supportPercentage: totalVotes > 0 ? Math.round((voteCounts.SUPPORT || 0) / totalVotes * 100) : 0,
        opposePercentage: totalVotes > 0 ? Math.round((voteCounts.OPPOSE || 0) / totalVotes * 100) : 0,
        neutralPercentage: totalVotes > 0 ? Math.round((voteCounts.NEUTRAL || 0) / totalVotes * 100) : 0,
        
        // User participation
        userHasVoted: !!userVote,
        userVote: userVote?.vote || null,
        
        // Comments
        totalComments: consultation._count.ConsultationComment,
        recentComments: consultation.ConsultationComment.map(comment => ({
          id: comment.id,
          content: comment.comment,
          author: comment.User?.name || 'Anonymous',
          createdAt: comment.createdAt.toISOString(),
          isOwnComment: comment.userId === userId
        })),
        
        // Status
        isActive: daysRemaining > 0,
        isExpiringSoon: daysRemaining <= 3 && daysRemaining > 0
      }
    })

    return NextResponse.json({
      consultations: consultationsWithStats,
      userParticipation: {
        totalVotes: await prisma.consultationVote.count({ where: { userId } }),
        totalComments: await prisma.consultationComment.count({ where: { userId } })
      }
    })

  } catch (error) {
    console.error("Public consultations API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST: Submit vote or comment
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { consultationId, type, vote, comment } = body

    if (!consultationId || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if consultation exists and is active
    const consultation = await prisma.publicConsultation.findUnique({
      where: { id: consultationId }
    })

    if (!consultation) {
      return NextResponse.json({ error: "Consultation not found" }, { status: 404 })
    }

    if (consultation.status !== "ACTIVE" || new Date() > consultation.endDate) {
      return NextResponse.json({ error: "Consultation is not active" }, { status: 400 })
    }

    if (type === "vote") {
      if (!vote || !["SUPPORT", "OPPOSE", "NEUTRAL"].includes(vote)) {
        return NextResponse.json({ error: "Invalid vote value" }, { status: 400 })
      }

      await prisma.consultationVote.upsert({
        where: {
          consultationId_userId: {
            consultationId,
            userId: session.user.id
          }
        },
        update: { vote },
        create: {
          id: uuidv4(),
          consultationId,
          userId: session.user.id,
          vote
        }
      })

      return NextResponse.json({ message: "Vote submitted successfully" })

    } else if (type === "comment") {
      if (!comment || comment.trim().length === 0) {
        return NextResponse.json({ error: "Comment cannot be empty" }, { status: 400 })
      }

      if (comment.length > 1000) {
        return NextResponse.json({ error: "Comment is too long (max 1000 characters)" }, { status: 400 })
      }
      
      const newComment = await prisma.consultationComment.create({
        data: {
          id: uuidv4(),
          consultationId,
          userId: session.user.id,
          comment: comment.trim()
        }
      })
      // Fetch the user name for the newly created comment
      const user = await prisma.user.findUnique({
        where: { id: newComment.userId },
        select: { name: true }
      })
      return NextResponse.json({
        message: "Comment submitted successfully",
        comment: {
          id: newComment.id,
          content: newComment.comment,
          author: user?.name || 'Anonymous',
          createdAt: newComment.createdAt.toISOString()
        }
      })

    } else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 })
    }

  } catch (error) {
    console.error("Public consultation submission error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
