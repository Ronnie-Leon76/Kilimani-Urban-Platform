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

    const { reportId, vote, comment } = await request.json()

    if (!reportId || !vote) {
      return NextResponse.json({ 
        error: "Report ID and vote are required" 
      }, { status: 400 })
    }

    if (!["support", "oppose", "neutral"].includes(vote)) {
      return NextResponse.json({ 
        error: "Vote must be 'support', 'oppose', or 'neutral'" 
      }, { status: 400 })
    }

    // Check if report exists and public voting is enabled
    const report = await prisma.report.findUnique({
      where: { id: reportId },
      select: {
        id: true,
        publicVotingEnabled: true,
        votingDeadline: true,
        votesFor: true,
        votesAgainst: true
      }
    })

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 })
    }

    if (!report.publicVotingEnabled) {
      return NextResponse.json({ 
        error: "Public voting is not enabled for this report" 
      }, { status: 400 })
    }

    if (report.votingDeadline && new Date() > report.votingDeadline) {
      return NextResponse.json({ 
        error: "Voting deadline has passed" 
      }, { status: 400 })
    }

    // Check if user has already voted
    const existingVote = await prisma.reportVote.findUnique({
      where: {
        reportId_userId: {
          reportId: reportId,
          userId: session.user?.id ?? ""
        }
      }
    })

    if (existingVote) {
      // Update existing vote
      await prisma.$transaction(async (tx) => {
        // Update the vote record
        await tx.reportVote.update({
          where: { id: existingVote.id },
          data: {
            vote: vote,
            comment: comment || null,
            createdAt: new Date() // Update timestamp
          }
        })

        // Recalculate vote counts
        const votes = await tx.reportVote.findMany({
          where: { reportId: reportId },
          select: { vote: true }
        })

        const votesFor = votes.filter(v => v.vote === "support").length
        const votesAgainst = votes.filter(v => v.vote === "oppose").length

        // Update report vote counts
        await tx.report.update({
          where: { id: reportId },
          data: {
            votesFor: votesFor,
            votesAgainst: votesAgainst
          }
        })
      })

      return NextResponse.json({
        success: true,
        message: "Vote updated successfully",
        voteId: existingVote.id
      })
    } else {
      // Create new vote
      const newVote = await prisma.$transaction(async (tx) => {
        // Create vote record
        const vote_record = await tx.reportVote.create({
          data: {
            id: crypto.randomUUID(),
            reportId: reportId,
            userId: session.user?.id ?? "",
            vote: vote,
            comment: comment || null
          }
        })

        // Recalculate vote counts
        const votes = await tx.reportVote.findMany({
          where: { reportId: reportId },
          select: { vote: true }
        })

        const votesFor = votes.filter(v => v.vote === "support").length
        const votesAgainst = votes.filter(v => v.vote === "oppose").length

        // Update report vote counts
        await tx.report.update({
          where: { id: reportId },
          data: {
            votesFor: votesFor,
            votesAgainst: votesAgainst
          }
        })

        // Check if majority threshold is reached (more than 60% support)
        const totalVotes = votes.length
        const supportPercentage = totalVotes > 0 ? (votesFor / totalVotes) * 100 : 0

        if (totalVotes >= 10 && supportPercentage > 60) {
          // Escalate to high priority and schedule meeting
          await tx.report.update({
            where: { id: reportId },
            data: {
              priority: "HIGH",
              meetingScheduled: true,
              meetingDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
            }
          })
        }

        return vote_record
      })

      return NextResponse.json({
        success: true,
        message: "Vote recorded successfully",
        voteId: newVote.id
      })
    }

  } catch (error) {
    console.error("Vote recording error:", error)
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

    // Get voting statistics
    const report = await prisma.report.findUnique({
      where: { id: reportId },
      select: {
        id: true,
        publicVotingEnabled: true,
        votingDeadline: true,
        votesFor: true,
        votesAgainst: true,
        ReportVote: {
          include: {
            User: {
              select: {
                name: true,
                role: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 })
    }

    const totalVotes = report.ReportVote.length
    const neutralVotes = totalVotes - report.votesFor - report.votesAgainst
    const supportPercentage = totalVotes > 0 ? (report.votesFor / totalVotes) * 100 : 0
    const opposePercentage = totalVotes > 0 ? (report.votesAgainst / totalVotes) * 100 : 0
    const neutralPercentage = totalVotes > 0 ? (neutralVotes / totalVotes) * 100 : 0

    return NextResponse.json({
      reportId: report.id,
      publicVotingEnabled: report.publicVotingEnabled,
      votingDeadline: report.votingDeadline,
      statistics: {
        totalVotes: totalVotes,
        votesFor: report.votesFor,
        votesAgainst: report.votesAgainst,
        neutralVotes: neutralVotes,
        supportPercentage: Math.round(supportPercentage * 100) / 100,
        opposePercentage: Math.round(opposePercentage * 100) / 100,
        neutralPercentage: Math.round(neutralPercentage * 100) / 100,
        majorityReached: totalVotes >= 10 && supportPercentage > 60
      },
      votes: report.ReportVote.map(vote => ({
        id: vote.id,
        vote: vote.vote,
        comment: vote.comment,
        voterName: vote.User.name || "Anonymous",
        voterRole: vote.User.role,
        createdAt: vote.createdAt
      }))
    })

  } catch (error) {
    console.error("Vote retrieval error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
