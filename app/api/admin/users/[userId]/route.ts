import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if current user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!currentUser || currentUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden - Admin access required" }, { status: 403 })
    }

    const { userId } = params
    const body = await request.json()
    const { role, action } = body

    // Validate userId
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    // Prevent admin from changing their own role
    if (userId === session.user.id) {
      return NextResponse.json({ 
        error: "Cannot modify your own role for security reasons" 
      }, { status: 400 })
    }

    // Check if target user exists
    const targetUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, role: true }
    })

    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    if (action === "updateRole") {
      // Validate role
      const validRoles = ["ADMIN", "GOVERNMENT_OFFICIAL", "RESIDENT"]
      if (!role || !validRoles.includes(role)) {
        return NextResponse.json({ 
          error: "Invalid role. Must be one of: ADMIN, GOVERNMENT_OFFICIAL, RESIDENT" 
        }, { status: 400 })
      }

      // Update user role
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { role },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true
        }
      })

      return NextResponse.json({
        message: "User role updated successfully",
        user: {
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          updatedAt: updatedUser.updatedAt
        }
      })
    }

    if (action === "toggleStatus") {
      // For now, we'll simulate user status by updating their updatedAt
      // In a real system, you'd have a separate 'active' field
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { 
          updatedAt: new Date() // Update timestamp to mark as "active"
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          updatedAt: true
        }
      })

      return NextResponse.json({
        message: "User status updated successfully",
        user: updatedUser
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })

  } catch (error) {
    console.error("User management API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if current user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!currentUser || currentUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden - Admin access required" }, { status: 403 })
    }

    const { userId } = params

    // Prevent admin from deleting their own account
    if (userId === session.user.id) {
      return NextResponse.json({ 
        error: "Cannot delete your own account for security reasons" 
      }, { status: 400 })
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true }
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Delete user and their associated data
    await prisma.$transaction(async (tx) => {
      // Delete user's reports first
      await tx.report.deleteMany({
        where: { userId: userId }
      })

      // Delete the user
      await tx.user.delete({
        where: { id: userId }
      })
    })

    return NextResponse.json({
      message: "User and associated data deleted successfully",
      deletedUser: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {
    console.error("User deletion API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if current user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!currentUser || currentUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden - Admin access required" }, { status: 403 })
    }

    const { userId } = params

    // Get user details with reports count
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        image: true,
        _count: {
          select: {
            Report: true
          }
        },
        Report: {
          select: {
            id: true,
            title: true,
            type: true,
            status: true,
            priority: true,
            createdAt: true
          },
          orderBy: {
            createdAt: 'desc'
          },
          take: 10 // Latest 10 reports
        }
      }
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Format user data
    const formattedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image,
      joinDate: user.createdAt.toLocaleDateString(),
      lastActive: user.updatedAt.toLocaleDateString(),
      reportsCount: user._count.Report,
      recentReports: user.Report.map(report => ({
        id: report.id,
        title: report.title,
        type: report.type,
        status: report.status,
        priority: report.priority,
        createdAt: report.createdAt.toLocaleDateString()
      }))
    }

    return NextResponse.json(formattedUser)

  } catch (error) {
    console.error("User details API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
