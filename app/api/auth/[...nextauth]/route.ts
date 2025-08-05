import NextAuth from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Handle potential build-time issues
let handler
try {
  handler = NextAuth(authOptions)
} catch (error) {
  console.error('NextAuth initialization error:', error)
  // Fallback handler for build time
  handler = {
    GET: async () => new Response('NextAuth not available during build', { status: 503 }),
    POST: async () => new Response('NextAuth not available during build', { status: 503 }),
  }
}

export { handler as GET, handler as POST }
