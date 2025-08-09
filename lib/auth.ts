import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"  // Commented out when using JWT strategy
import { prisma } from "./prisma"
import { env } from "./env"

export const authOptions = {
  // Remove adapter when using JWT strategy to avoid database timeouts during OAuth
  // adapter: PrismaAdapter(prisma),
  
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 30000, // Increase timeout to 30 seconds
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
  
  // Use JWT strategy to avoid database timeouts during OAuth
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  
  callbacks: {
    signIn: async ({ user, account, profile }: any) => {
      try {
        // This callback runs when user signs in
        console.log(`SignIn callback triggered:`, {
          userEmail: user.email,
          userName: user.name,
          provider: account?.provider,
          profileId: profile?.sub
        })
        
        console.log(`User ${user.email} signing in with ${account?.provider}`)
        return true
      } catch (error) {
        console.error('Sign in callback error:', error)
        // Return true to allow sign in even if callback fails
        return true
      }
    },
    
    jwt: async ({ token, user }: any) => {
      try {
        console.log('JWT callback triggered:', { 
          hasUser: !!user, 
          userEmail: user?.email, 
          tokenEmail: token?.email 
        })
        
        // This callback is called whenever a JWT is created/updated
        if (user) {
          // User just signed in, add user info to token
          token.email = user.email
          token.name = user.name
          token.image = user.image
          
          console.log('Processing user login for:', user.email)
          
          // Try to get or create user in database
          try {
            let dbUser = await prisma.user.findUnique({
              where: { email: user.email },
              select: { id: true, role: true },
            })
            
            console.log('Database lookup result:', { found: !!dbUser, dbUser })
            
            if (dbUser) {
              token.id = dbUser.id
              token.role = dbUser.role
              console.log('Existing user found, assigned token:', { id: dbUser.id, role: dbUser.role })
            } else {
              // Create user if doesn't exist
              console.log('Creating new user...')
              const userCount = await prisma.user.count()
              const newRole = userCount === 0 ? "ADMIN" : "RESIDENT"
              
              console.log('User creation details:', { userCount, newRole })
              
              const newUser = await prisma.user.create({
                data: {
                  id: `cm${Date.now().toString(36)}${Math.random().toString(36).substr(2, 9)}`, // Generate a unique ID
                  email: user.email,
                  name: user.name,
                  image: user.image,
                  role: newRole,
                },
                select: {
                  id: true,
                  role: true
                }
              })
              
              token.id = newUser.id
              token.role = newUser.role
              console.log(`New user created successfully:`, { 
                id: newUser.id, 
                email: user.email, 
                role: newUser.role 
              })
            }
          } catch (dbError) {
            console.error('Database error in JWT callback:', dbError)
            console.error('Failed to create/find user for email:', user.email)
            
            // Generate a temporary ID based on email if database is unavailable
            token.id = `temp_${Buffer.from(user.email).toString('base64')}`
            token.role = "RESIDENT"
            
            console.log('Assigned temporary ID:', token.id)
            
            // Try to create user in background (don't wait for it)
            setTimeout(async () => {
              try {
                console.log('Attempting background user creation for:', user.email)
                const userCount = await prisma.user.count()
                const newRole = userCount === 0 ? "ADMIN" : "RESIDENT"
                
                const result = await prisma.user.upsert({
                  where: { email: user.email },
                  update: {},
                  create: {
                    id: `cm${Date.now().toString(36)}${Math.random().toString(36).substr(2, 9)}`, // Generate a unique ID
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    role: newRole,
                  },
                })
                console.log(`Background user creation successful for ${user.email}:`, result.id)
              } catch (bgError) {
                console.error('Background user creation failed:', bgError)
              }
            }, 1000)
          }
        }
        return token
      } catch (error) {
        console.error('JWT callback error:', error)
        return token
      }
    },
    
    session: async ({ session, token }: any) => {
      try {
        console.log('Session callback triggered:', { 
          tokenId: token?.id, 
          tokenEmail: token?.email,
          sessionUserEmail: session?.user?.email 
        })
        
        // Send properties to the client
        if (token) {
          session.user.id = token.id
          session.user.role = token.role
          session.user.email = token.email
          session.user.name = token.name
          session.user.image = token.image
          
          console.log('Session user data assigned:', {
            id: session.user.id,
            email: session.user.email,
            role: session.user.role,
            isTemporary: token.id?.startsWith('temp_')
          })
          
          // If we have a temporary ID, try to get the real ID from database
          if (token.id && typeof token.id === 'string' && token.id.startsWith('temp_')) {
            console.log('Attempting to resolve temporary ID for:', token.email)
            try {
              const dbUser = await prisma.user.findUnique({
                where: { email: token.email },
                select: { id: true, role: true },
              })
              
              if (dbUser) {
                console.log('Found real user for temporary ID:', dbUser)
                session.user.id = dbUser.id
                session.user.role = dbUser.role
                // Note: We can't update the token here, so the temp ID will persist until next login
              } else {
                console.log('No real user found yet for:', token.email)
              }
            } catch (dbError) {
              console.error('Database error in session callback:', dbError)
              // Keep using the temporary ID
            }
          }
        }
        
        console.log('Final session data:', {
          id: session?.user?.id,
          email: session?.user?.email,
          role: session?.user?.role
        })
        
        return session
      } catch (error) {
        console.error('Session callback error:', error)
        return session
      }
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