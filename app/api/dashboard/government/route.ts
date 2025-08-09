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

    // Get dashboard statistics
    const [
      totalReports,
      pendingReports,
      resolvedThisMonth,
      activeUsers,
      recentReports,
      reportsByType,
      reportsByStatus
    ] = await Promise.all([
      // Total reports count
      prisma.report.count(),
      
      // Pending reports count
      prisma.report.count({
        where: { status: "PENDING" }
      }),
      
      // Resolved reports this month
      prisma.report.count({
        where: {
          status: "RESOLVED",
          resolvedAt: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        }
      }),
      
      // Active users (users who created reports in last 30 days)
      prisma.user.count({
        where: {
          Report: {
            some: {
              createdAt: {
                gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
              }
            }
          }
        }
      }),
      
      // Recent reports with user details
      prisma.report.findMany({
        take: 10,
        orderBy: { createdAt: "desc" },
        include: {
          User: {
            select: { name: true, email: true }
          }
        }
      }),
      
      // Reports by type
      prisma.report.groupBy({
        by: ["type"],
        _count: { type: true }
      }),
      
      // Reports by status
      prisma.report.groupBy({
        by: ["status"],
        _count: { status: true }
      })
    ])

    // Calculate previous month's resolved reports for comparison
    const resolvedLastMonth = await prisma.report.count({
      where: {
        status: "RESOLVED",
        resolvedAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
          lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    // Calculate change percentages
    const resolvedChange = resolvedLastMonth > 0 
      ? Math.round(((resolvedThisMonth - resolvedLastMonth) / resolvedLastMonth) * 100)
      : resolvedThisMonth > 0 ? 100 : 0

    // Get last month's pending count for comparison
    const pendingLastMonth = await prisma.report.count({
      where: {
        status: "PENDING",
        createdAt: {
          lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    })

    const pendingChange = pendingLastMonth > 0 
      ? Math.round(((pendingReports - pendingLastMonth) / pendingLastMonth) * 100)
      : pendingReports > 0 ? 100 : 0

    // Format the response
    const stats = {
      totalReports: {
        value: totalReports,
        change: "+12%", // You can calculate this based on previous month data
        title: "Total Reports"
      },
      pendingReports: {
        value: pendingReports,
        change: pendingChange >= 0 ? `+${pendingChange}%` : `${pendingChange}%`,
        title: "Pending Issues"
      },
      resolvedThisMonth: {
        value: resolvedThisMonth,
        change: resolvedChange >= 0 ? `+${resolvedChange}%` : `${resolvedChange}%`,
        title: "Resolved This Month"
      },
      activeUsers: {
        value: activeUsers,
        change: "+8%", // You can calculate this based on previous month data
        title: "Active Users"
      }
    }

    // Transform report type data
    const typeDistribution = reportsByType.reduce((acc, item) => {
      acc[item.type] = item._count.type
      return acc
    }, {} as Record<string, number>)

    // Transform status data
    const statusDistribution = reportsByStatus.reduce((acc, item) => {
      acc[item.status] = item._count.status
      return acc
    }, {} as Record<string, number>)

    // Calculate response times (average days to resolution)
    const avgResponseTime = await prisma.report.findMany({
      where: {
        status: "RESOLVED",
        resolvedAt: { not: null }
      },
      select: {
        createdAt: true,
        resolvedAt: true
      }
    })

    const avgDays = avgResponseTime.length > 0 
      ? avgResponseTime.reduce((sum, report) => {
          const days = Math.ceil((report.resolvedAt!.getTime() - report.createdAt.getTime()) / (1000 * 60 * 60 * 24))
          return sum + days
        }, 0) / avgResponseTime.length
      : 0

    return NextResponse.json({
      stats,
      recentReports: recentReports.map(report => ({
        id: report.id,
        title: report.title,
        type: report.type,
        status: report.status,
        priority: report.priority,
        reporter: report.User.name || "Anonymous",
        createdAt: report.createdAt.toISOString().split('T')[0],
        location: report.address || `${report.latitude}, ${report.longitude}`
      })),
      analytics: {
        typeDistribution,
        statusDistribution,
        avgResponseTime: Math.round(avgDays * 10) / 10
      }
    })

  } catch (error) {
    console.error("Dashboard API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
