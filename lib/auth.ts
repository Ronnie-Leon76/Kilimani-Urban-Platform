import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"
import { env } from "./env"

// Helper function to safely create adapter only at runtime
const createSafeAdapter = () => {
  // Only create adapter if we're in a runtime environment with database access
  if (process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'development') {
    try {
      return PrismaAdapter(prisma)
    } catch (error) {
      console.warn('Prisma adapter creation failed:', error)
      return undefined
    }
  }
  return undefined
}

export const authOptions = {
  // Conditionally set adapter - undefined during build, PrismaAdapter at runtime
  ...(process.env.NODE_ENV !== 'development' && !process.env.VERCEL_ENV ? {} : { adapter: createSafeAdapter() }),
  
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  
  // Use JWT strategy to avoid database dependency during build
  session: {
    strategy: "jwt" as const,
  },
  
  callbacks: {
    jwt: async ({ token, user }: { token: Record<string, unknown>; user?: any }) => {
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
    
    session: async ({ session, token }: { session: any; token: any }) => {
      if (session?.user && token) {
        session.user.id = token.id as string
        session.user.role = (token.role as string) || "RESIDENT"
      }
      return session
    },
  },
  
  pages: {
    signIn: "/auth/signin",
  },
  
  debug: process.env.NODE_ENV === "development",
}