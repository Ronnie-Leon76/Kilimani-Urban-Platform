import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"
import { env } from "./env"

// Create a safe adapter that handles build-time issues
const createPrismaAdapter = () => {
  try {
    return PrismaAdapter(prisma)
  } catch (error) {
    console.warn('Prisma adapter initialization failed during build:', error)
    return undefined
  }
}

export const authOptions: NextAuthOptions = {
  adapter: createPrismaAdapter(),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT strategy to avoid database dependency during build
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        // Only try to get role from database if we're not in build mode
        if (process.env.NODE_ENV !== 'production' || process.env.VERCEL_ENV) {
          try {
            const dbUser = await prisma.user.findUnique({
              where: { id: user.id },
              select: { role: true },
            })
            
            if (!dbUser?.role) {
              const userCount = await prisma.user.count()
              const newRole = userCount === 1 ? "ADMIN" : "RESIDENT"
              
              await prisma.user.update({
                where: { id: user.id },
                data: { role: newRole }
              })
              
              token.role = newRole
            } else {
              token.role = dbUser.role
            }
          } catch (error) {
            console.error('Error updating user role:', error)
            token.role = "RESIDENT"
          }
        } else {
          token.role = "RESIDENT"
        }
      }
      return token
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      if (session?.user && token) {
        session.user.id = token.id
        session.user.role = token.role || "RESIDENT"
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  // Add debug mode for development
  debug: process.env.NODE_ENV === "development",
}