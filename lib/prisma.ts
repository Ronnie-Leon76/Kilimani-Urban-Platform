import { PrismaClient } from '@prisma/client';

// Use globalThis for broader compatibility
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Initialize Prisma Client with optional logging
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

// Store Prisma Client in globalThis during development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;