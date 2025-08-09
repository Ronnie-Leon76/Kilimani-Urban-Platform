#!/usr/bin/env node

const { PrismaClient } = require('./prisma/generated/client')

async function testConnection() {
  const prisma = new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

  try {
    console.log('Testing database connection...')
    
    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    
    // Test a simple query
    const userCount = await prisma.user.count()
    console.log(`✅ Query successful: Found ${userCount} users`)
    
    // Test creating/reading session data (what NextAuth does)
    const testSession = await prisma.session.findFirst()
    console.log(`✅ Session table accessible: ${testSession ? 'Has sessions' : 'No sessions found'}`)
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    
    if (error.code === 'P1001') {
      console.error('This is a connection error. The database might be unreachable.')
    } else if (error.code === 'P2021') {
      console.error('The table does not exist in the database.')
    }
    
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
