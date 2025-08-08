import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"
import { env } from "./env"

export const authOptions = {
  // Always use adapter to ensure users are created in database
  adapter: PrismaAdapter(prisma),
  
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
  
  // Use database strategy to create users in database
  session: {
    strategy: "database" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  callbacks: {
    signIn: async ({ user, account, profile }: any) => {
      // This callback runs when user signs in
      // The adapter will automatically create the user if they don't exist
      console.log(`User ${user.email} signing in with ${account?.provider}`)
      return true
    },
    
    session: async ({ session, user }: any) => {
      // With database strategy, we get the user from database
      if (session?.user && user) {
        session.user.id = user.id
        
        // Check if user has a role, if not assign one
        let dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        })
        
        if (!dbUser?.role) {
          // Count total users to determine if this should be admin
          const userCount = await prisma.user.count()
          const newRole = userCount === 1 ? "ADMIN" : "RESIDENT"
          
          // Update user role
          await prisma.user.update({
            where: { id: user.id },
            data: { role: newRole }
          })
          
          session.user.role = newRole
        } else {
          session.user.role = dbUser.role
        }
      }
      return session
    },
  },
  
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  
  debug: process.env.NODE_ENV === "development",
  
  // Add custom event logging
  events: {
    async createUser({ user }: any) {
      console.log(`New user created: ${user.email}`)
    },
    async signIn({ user, account }: any) {
      console.log(`User ${user.email} signed in with ${account?.provider}`)
    },
    async signOut() {
      console.log(`User signed out`)
    },
  },
}