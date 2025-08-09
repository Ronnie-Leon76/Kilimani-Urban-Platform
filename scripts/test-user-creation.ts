import { prisma } from '../lib/prisma'

async function testUserCreation() {
  try {
    console.log('Testing user creation...')
    
    // Test user data
    const testEmail = 'test@example.com'
    const testName = 'Test User'
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email: testEmail }
    })
    
    if (existingUser) {
      console.log('Test user already exists:', existingUser)
      return
    }
    
    // Create test user
    const userCount = await prisma.user.count()
    const newRole = userCount === 0 ? "ADMIN" : "RESIDENT"
    
    const newUser = await prisma.user.create({
      data: {
        id: `cm${Date.now().toString(36)}${Math.random().toString(36).substr(2, 9)}`,
        email: testEmail,
        name: testName,
        role: newRole,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true
      }
    })
    
    console.log('Test user created successfully:', newUser)
    
    // Cleanup
    await prisma.user.delete({
      where: { id: newUser.id }
    })
    
    console.log('Test user cleaned up')
    
  } catch (error) {
    console.error('Error testing user creation:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testUserCreation()
