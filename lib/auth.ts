import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import { prisma } from "./prisma"
import { env } from "./env"

// Helper function to safely create adapter only at runtime
const createSafeAdapter = () => {
  // Skip adapter creation during build phase
  if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) {
    return undefined
  }
  
  // Only create adapter if we have database access
  if (process.env.DATABASE_URL) {
    try {
      return PrismaAdapter(prisma)
    } catch (error) {
      console.warn('Prisma adapter creation failed:', error)
      return undefined
    }
  }
  return undefined
}

export const authOptions: NextAuthOptions = {
  // Only set adapter if it's available
  ...(createSafeAdapter() ? { adapter: createSafeAdapter() } : {}),
  
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 10000, // Increase timeout to 10 seconds
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  
  // Use JWT strategy to avoid database dependency during build
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        
        // Only access database if we have an adapter (runtime environment)
        if (createSafeAdapter()) {
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
          // Fallback during build or when database is unavailable
          token.role = "RESIDENT"
        }
      }
      return token
    },
    
    session: async ({ session, token }) => {
      if (session?.user && token) {
        session.user.id = token.id as string
        session.user.role = (token.role as string) || "RESIDENT"
      }
      return session
    },
  },
  
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  
  debug: process.env.NODE_ENV === "development",
  
  // Add custom error handling
  events: {
    async signIn({ user, account, profile }) {
      console.log(`User ${user.email} signed in with ${account?.provider}`)
    },
    async signOut() {
      console.log(`User signed out`)
    },
  },
}