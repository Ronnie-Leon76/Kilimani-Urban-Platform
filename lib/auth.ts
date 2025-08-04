import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, user }: { session: any; user: any }) => {
      if (session?.user) {
        session.user.id = user.id
        
        // Check if user has a role, if not assign one
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        })
        
        if (!dbUser?.role) {
          // Make the first user an admin
          const userCount = await prisma.user.count()
          const newRole = userCount === 1 ? "ADMIN" : "RESIDENT"
          
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
  },
}
