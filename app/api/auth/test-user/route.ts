import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string, email: string, name: string, role: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "No session found" }, { status: 401 })
    }

    // Check if user exists in database
    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return NextResponse.json({
      session: {
        user: session.user
      },
      database: {
        userExists: !!dbUser,
        user: dbUser
      },
      message: dbUser ? "User found in database" : "User NOT found in database - this indicates an issue with user creation"
    })

  } catch (error) {
    console.error("Test user API error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string, email: string, name: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "No session found" }, { status: 401 })
    }

    // Force create user in database
    const userCount = await prisma.user.count()
    const newRole = userCount === 0 ? "ADMIN" : "RESIDENT"

    const user = await prisma.user.upsert({
      where: { email: session.user.email },
      update: {
        name: session.user.name,
      },
      create: {
        id: `cm${Date.now().toString(36)}${Math.random().toString(36).substr(2, 9)}`,
        email: session.user.email,
        name: session.user.name,
        role: newRole,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true
      }
    })

    return NextResponse.json({
      message: "User created/updated successfully",
      user
    })

  } catch (error) {
    console.error("Force create user API error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
