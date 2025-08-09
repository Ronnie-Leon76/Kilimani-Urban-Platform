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

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Get comprehensive admin statistics
    const [
      totalUsers,
      totalReports,
      pendingReports,
      resolvedReports,
      activeConsultations,
      systemUptime,
      mobileUsers,
      avgResponseTime,
      recentReports,
      usersByRole,
      reportsTrend,
      systemUsers
    ] = await Promise.all([
      // Total users
      prisma.user.count(),
      
      // Total reports
      prisma.report.count(),
      
      // Pending reports
      prisma.report.count({
        where: { status: "PENDING" }
      }),
      
      // Resolved reports
      prisma.report.count({
        where: { status: "RESOLVED" }
      }),
      
      // Active consultations
      prisma.publicConsultation.count({
        where: {
          status: "active",
          endDate: { gte: new Date() }
        }
      }),
      
      // System uptime (placeholder - in real app, this would come from monitoring)
      Promise.resolve(99.9),
      
      // Mobile users (users who were active in the last 7 days - using updatedAt as a placeholder)
      prisma.user.count({
        where: {
          updatedAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Active in last 7 days
          }
        }
      }),
      
      // Average response time calculation (hardcoded for now)
      Promise.resolve(2.3),
      
      // Recent reports requiring attention
      prisma.report.findMany({
        where: {
          OR: [
            { status: "PENDING" },
            { priority: "HIGH" },
            { priority: "CRITICAL" }
          ]
        },
        include: {
          User: {
            select: { name: true, email: true }
          }
        },
        orderBy: [
          { priority: "desc" },
          { createdAt: "desc" }
        ],
        take: 10
      }),
      
      // Users by role
      prisma.user.groupBy({
        by: ['role'],
        _count: {
          role: true
        }
      }),
      
      // Reports trend (last 7 days)
      prisma.report.groupBy({
        by: ['createdAt'],
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        },
        _count: {
          id: true
        }
      }),
      
      // System users with reports count
      prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true,
          Report: {
            select: {
              id: true
            }
          }
        },
        orderBy: [
          { createdAt: 'desc' }
        ],
        take: 50 // Limit to 50 users for performance
      })
    ])

    // Format recent reports
    const formattedReports = recentReports.map(report => ({
      id: report.id,
      title: report.title,
      type: report.type,
      status: report.status,
      priority: report.priority,
      reporter: report.User?.name || 'Anonymous',
      createdAt: report.createdAt.toLocaleDateString()
    }))

    // Format system users
    const formattedSystemUsers = systemUsers.map(user => ({
      id: user.id,
      name: user.name || 'No Name',
      email: user.email || 'No Email',
      role: user.role,
      status: user.updatedAt > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? 'active' : 'inactive',
      joinDate: user.createdAt.toLocaleDateString(),
      reportsCount: user.Report ? user.Report.length : 0,
      lastActive: getLastActiveTime(user.updatedAt)
    }))

    // Helper function for last active time
    function getLastActiveTime(updatedAt: Date): string {
      const now = new Date()
      const diff = now.getTime() - updatedAt.getTime()
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor(diff / (1000 * 60 * 60))
      
      if (days > 0) {
        return days === 1 ? '1 day ago' : `${days} days ago`
      } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`
      } else {
        return 'Just now'
      }
    }

    // Calculate role distribution
    const roleStats = usersByRole.reduce((acc, role) => {
      acc[role.role.toLowerCase()] = role._count.role
      return acc
    }, {} as Record<string, number>)

    // Calculate weekly growth
    const weeklyReports = reportsTrend.length
    const weeklyGrowth = totalReports > 0 ? Math.round((weeklyReports / totalReports) * 100) : 0

    return NextResponse.json({
      overview: {
        totalUsers,
        totalReports,
        pendingReports,
        resolvedReports,
        activeConsultations,
        systemUptime,
        mobileUsers: Math.round(mobileUsers * 0.8), // Estimate mobile usage
        avgResponseTime
      },
      recentReports: formattedReports,
      systemUsers: formattedSystemUsers,
      analytics: {
        weeklyGrowth,
        resolutionRate: totalReports > 0 ? Math.round((resolvedReports / totalReports) * 100) : 0,
        userGrowth: weeklyGrowth + 12, // Placeholder calculation
        roleDistribution: roleStats
      },
      trends: {
        reportsThisWeek: weeklyReports,
        trend: weeklyGrowth > 15 ? 'up' : weeklyGrowth < -5 ? 'down' : 'stable'
      }
    })

  } catch (error) {
    console.error("Admin dashboard API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
