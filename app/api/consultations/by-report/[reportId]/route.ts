import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const reportId = params.reportId

    // Find consultation related to this report
    const consultation = await prisma.publicConsultation.findFirst({
      where: {
        description: {
          contains: reportId // Consultations created from reports include the report ID
        }
      }
    })

    if (!consultation) {
      return NextResponse.json({ 
        consultation: null,
        comments: []
      })
    }

    // Get consultation votes and comments
    const [votes, comments] = await Promise.all([
      prisma.consultationVote.findMany({
        where: { consultationId: consultation.id },
        include: {
          User: {
            select: { name: true }
          }
        }
      }),
      prisma.consultationComment.findMany({
        where: { consultationId: consultation.id },
        include: {
          User: {
            select: { name: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      })
    ])

    // Calculate voting statistics
    const totalVotes = votes.length
    const supportVotes = votes.filter(v => v.vote === 'SUPPORT').length
    const opposeVotes = votes.filter(v => v.vote === 'OPPOSE').length
    const neutralVotes = votes.filter(v => v.vote === 'NEUTRAL').length

    const supportPercentage = totalVotes > 0 ? Math.round((supportVotes / totalVotes) * 100) : 0
    const opposePercentage = totalVotes > 0 ? Math.round((opposeVotes / totalVotes) * 100) : 0
    const neutralPercentage = totalVotes > 0 ? Math.round((neutralVotes / totalVotes) * 100) : 0

    const formattedComments = comments.map(comment => ({
      id: comment.id,
      content: comment.comment,
      author: comment.User?.name || 'Anonymous',
      createdAt: comment.createdAt.toISOString(),
      support: comment.vote || 'NEUTRAL'
    }))

    return NextResponse.json({
      consultation: {
        id: consultation.id,
        title: consultation.title,
        description: consultation.description,
        startDate: consultation.startDate.toISOString(),
        endDate: consultation.endDate.toISOString(),
        status: consultation.status,
        totalVotes,
        totalComments: comments.length,
        supportPercentage,
        opposePercentage,
        neutralPercentage
      },
      comments: formattedComments
    })

  } catch (error) {
    console.error("Get consultation by report error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
