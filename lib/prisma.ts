import { PrismaClient } from '@prisma/client'

declare global {
  var __prisma: PrismaClient | undefined
}

// Only initialize Prisma if we have a database URL and we're not in build mode
const createPrismaClient = () => {
  // Skip Prisma initialization during build
  if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV && !process.env.DATABASE_URL) {
    console.warn('Skipping Prisma initialization during build')
    return null
  }

  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL not found, skipping Prisma initialization')
    return null
  }

  try {
    return new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    })
  } catch (error) {
    console.error('Failed to initialize Prisma client:', error)
    return null
  }
}

// Use a proxy to handle cases where Prisma isn't initialized
const createPrismaProxy = (client: PrismaClient | null) => {
  if (!client) {
    // Return a proxy that throws helpful errors when database operations are attempted
    return new Proxy({} as PrismaClient, {
      get(target, prop) {
        throw new Error(`Prisma client not available. Database operation '${String(prop)}' cannot be executed.`)
      }
    })
  }
  return client
}

const globalForPrisma = globalThis as unknown as { __prisma?: PrismaClient }

export const prisma = 
  globalForPrisma.__prisma ?? 
  createPrismaProxy(createPrismaClient())

if (process.env.NODE_ENV !== "production" && prisma) {
  globalForPrisma.__prisma = prisma
}

export default prisma