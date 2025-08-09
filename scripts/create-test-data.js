const { PrismaClient } = require('./prisma/generated/client')

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Creating test data...')
    
    // Create a test user (you)
    const user = await prisma.user.create({
      data: {
        email: 'ronnie@example.com',
        name: 'Ronnie Leon',
        role: 'ADMIN',
        image: null
      }
    })
    
    console.log('Created user:', user)
    
    // Create some test reports
    const reports = await prisma.report.createMany({
      data: [
        {
          title: 'High rising building',
          description: 'Unauthorized construction of a high-rise building without proper permits',
          type: 'ILLEGAL_DEVELOPMENT',
          status: 'PENDING',
          priority: 'MEDIUM',
          address: 'Kiota School',
          latitude: -1.295287,
          longitude: 36.782834,
          userId: user.id
        },
        {
          title: 'Water shortage in Block A',
          description: 'Residents have been without water for 3 days',
          type: 'WATER_SHORTAGE',
          status: 'IN_PROGRESS',
          priority: 'HIGH',
          address: 'Block A, Kilimani',
          latitude: -1.296000,
          longitude: 36.783000,
          userId: user.id
        },
        {
          title: 'Flooding on Main Road',
          description: 'Severe flooding after heavy rains blocking traffic',
          type: 'FLOODING',
          status: 'PENDING',
          priority: 'HIGH',
          address: 'Main Road, Kilimani',
          latitude: -1.297000,
          longitude: 36.784000,
          userId: user.id
        },
        {
          title: 'Waste collection delayed',
          description: 'Garbage has not been collected for over a week',
          type: 'WASTE_MANAGEMENT',
          status: 'RESOLVED',
          priority: 'MEDIUM',
          address: 'Residential Area B',
          latitude: -1.298000,
          longitude: 36.785000,
          userId: user.id,
          resolvedAt: new Date()
        }
      ]
    })
    
    console.log('Created reports:', reports)
    
    // Create a test consultation
    const consultation = await prisma.publicConsultation.create({
      data: {
        title: 'New Park Development Consultation',
        description: 'Community consultation for the proposed new park in Kilimani area',
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        status: 'active',
        location: 'Kilimani Community Center',
        userId: user.id
      }
    })
    
    console.log('Created consultation:', consultation)
    
    console.log('✅ Test data created successfully!')
    
  } catch (error) {
    console.error('Error creating test data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
