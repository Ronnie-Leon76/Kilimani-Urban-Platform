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

    const body = await request.json()
    const { title, description, type, location, priority, images, latitude, longitude } = body

    // Validate required fields
    if (!title || !description || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create the report
    const report = await prisma.report.create({
      data: {
        title,
        description,
        type,
        address: location || 'Location not specified',
        latitude: latitude || 0,
        longitude: longitude || 0,
        priority: priority || "MEDIUM",
        status: "PENDING",
        userId: session.user.id,
        images: images || []
      },
      include: {
        user: {
          select: { name: true, email: true }
        }
      }
    })

    return NextResponse.json({
      message: "Report created successfully",
      report: {
        id: report.id,
        title: report.title,
        type: report.type,
        status: report.status,
        priority: report.priority,
        location: report.address || 'Location not specified',
        createdAt: report.createdAt.toLocaleDateString(),
        reporter: report.user?.name || 'Anonymous'
      }
    })

  } catch (error) {
    console.error("Create report API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const status = searchParams.get('status')
    const type = searchParams.get('type')

    // Build where clause
    const where: any = {}
    
    if (userId) {
      where.userId = userId
    }
    
    if (status) {
      where.status = status
    }
    
    if (type) {
      where.type = type
    }

    // Get reports with filters
    const reports = await prisma.report.findMany({
      where,
      include: {
        user: {
          select: { name: true, email: true }
        }
      },
      orderBy: { createdAt: "desc" }
    })

    const formattedReports = reports.map(report => ({
      id: report.id,
      title: report.title,
      description: report.description,
      type: report.type,
      status: report.status,
      priority: report.priority,
      location: report.address || 'Location not specified',
      images: report.images,
      createdAt: report.createdAt.toLocaleDateString(),
      reporter: report.user?.name || 'Anonymous'
    }))

    return NextResponse.json({ reports: formattedReports })

  } catch (error) {
    console.error("Get reports API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
