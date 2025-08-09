const { PrismaClient } = require('./generated/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@kilimani.local' },
    update: {},
    create: {
      email: 'admin@kilimani.local',
      name: 'Admin User',
      role: 'ADMIN',
      phoneNumber: '+254-700-000-001',
      location: 'Kilimani, Nairobi'
    }
  })

  const govUser = await prisma.user.upsert({
    where: { email: 'gov@kilimani.local' },
    update: {},
    create: {
      email: 'gov@kilimani.local',
      name: 'Government Official',
      role: 'GOVERNMENT_OFFICIAL',
      phoneNumber: '+254-700-000-002',
      location: 'County Office, Nairobi'
    }
  })

  const resident1 = await prisma.user.upsert({
    where: { email: 'resident1@kilimani.local' },
    update: {},
    create: {
      email: 'resident1@kilimani.local',
      name: 'John Kamau',
      role: 'RESIDENT',
      phoneNumber: '+254-700-000-003',
      location: 'Kilimani Estate'
    }
  })

  const resident2 = await prisma.user.upsert({
    where: { email: 'resident2@kilimani.local' },
    update: {},
    create: {
      email: 'resident2@kilimani.local',
      name: 'Jane Wanjiku',
      role: 'RESIDENT',
      phoneNumber: '+254-700-000-004',
      location: 'Hurlingham'
    }
  })

  console.log('✅ Created users')

  // Create sample reports
  const reports = [
    {
      title: 'Water Shortage in Kilimani Estate',
      description: 'Residents of Kilimani Estate have been without water for the past 3 days. The main water line appears to be damaged, affecting over 200 households. Urgent intervention needed.',
      type: 'WATER_SHORTAGE',
      status: 'PENDING',
      priority: 'HIGH',
      latitude: -1.2921,
      longitude: 36.7848,
      address: 'Kilimani Estate, Nairobi',
      images: ['/placeholder.jpg'],
      userId: resident1.id,
      infringedLaws: [],
      publicVotingEnabled: false
    },
    {
      title: 'Illegal Construction on Menelik Road',
      description: 'A developer is constructing a 6-story building without proper permits. The construction is violating setback requirements and blocking drainage. Neighbors are concerned about safety.',
      type: 'ILLEGAL_DEVELOPMENT',
      status: 'IN_PROGRESS',
      priority: 'CRITICAL',
      latitude: -1.2937,
      longitude: 36.7854,
      address: 'Menelik Road, Kilimani',
      images: ['/placeholder.jpg', '/placeholder.jpg'],
      userId: resident2.id,
      infringedLaws: [
        'Physical and Land Use Planning Act 2019, Section 32: Development without permits',
        'County Governments Act 2012, Section 104: Unauthorized construction'
      ],
      lawAnalysisDate: new Date(),
      publicVotingEnabled: true,
      votesFor: 15,
      votesAgainst: 2,
      votingDeadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) // 10 days from now
    },
    {
      title: 'Blocked Drainage System Causing Flooding',
      description: 'The drainage system along Kindaruma Road is completely blocked with garbage and debris. During heavy rains, the entire area floods, making roads impassable.',
      type: 'FLOODING',
      status: 'PENDING',
      priority: 'HIGH',
      latitude: -1.2925,
      longitude: 36.7841,
      address: 'Kindaruma Road, Kilimani',
      images: ['/placeholder.jpg'],
      userId: resident1.id,
      infringedLaws: [
        'Public Health Act: Improper waste disposal',
        'Water Act 2016: Obstruction of waterways'
      ],
      lawAnalysisDate: new Date(),
      publicVotingEnabled: true,
      votesFor: 8,
      votesAgainst: 1,
      votingDeadline: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000)
    },
    {
      title: 'Waste Management Issues at Yaya Center',
      description: 'Garbage collection has been irregular around Yaya Center area. Bins are overflowing and creating health hazards. The area needs immediate attention.',
      type: 'WASTE_MANAGEMENT',
      status: 'RESOLVED',
      priority: 'MEDIUM',
      latitude: -1.2948,
      longitude: 36.7816,
      address: 'Yaya Center, Argwings Kodhek Road',
      images: ['/placeholder.jpg'],
      userId: resident2.id,
      resolvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      finalVerdict: 'Issue resolved. Waste management company has been notified and collection schedule updated. Additional bins deployed.',
      verdictDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      title: 'Pothole on Argwings Kodhek Road',
      description: 'Large pothole near the junction with Ring Road Kilimani. Causing traffic congestion and vehicle damage. Road needs urgent repair.',
      type: 'INFRASTRUCTURE',
      status: 'IN_PROGRESS',
      priority: 'MEDIUM',
      latitude: -1.2952,
      longitude: 36.7813,
      address: 'Argwings Kodhek Road, Kilimani',
      images: ['/placeholder.jpg'],
      userId: resident1.id
    }
  ]

  for (const reportData of reports) {
    await prisma.report.create({
      data: reportData
    })
  }

  console.log('✅ Created sample reports')

  // Create some report votes for the reports with public voting enabled
  const votingReports = await prisma.report.findMany({
    where: { publicVotingEnabled: true }
  })

  for (const report of votingReports) {
    // Create some sample votes
    const voters = [resident1, resident2, adminUser, govUser]
    const voteTypes = ['support', 'support', 'support', 'neutral']
    
    for (let i = 0; i < voters.length; i++) {
      try {
        await prisma.reportVote.create({
          data: {
            reportId: report.id,
            userId: voters[i].id,
            vote: voteTypes[i],
            comment: i === 0 ? 'This is definitely a priority issue in our community.' : 
                    i === 1 ? 'Fully support addressing this matter urgently.' : 
                    i === 2 ? 'Government should take immediate action.' : 
                    'Need more information before taking a stance.'
          }
        })
      } catch (error) {
        console.log(`Vote already exists for user ${voters[i].name} on report ${report.title}`)
      }
    }
  }

  console.log('✅ Created sample votes')

  // Create sample public consultations
  const consultations = [
    {
      title: 'Kilimani Urban Development Plan 2025',
      description: 'Public consultation on the proposed urban development plan for Kilimani area. This includes new zoning regulations, infrastructure improvements, and green space development.',
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      status: 'ACTIVE',
      coordinates: '36.7848,-1.2921'
    },
    {
      title: 'Traffic Management Improvements',
      description: 'Seeking public input on proposed traffic management improvements along major roads in Kilimani including traffic lights, roundabouts, and pedestrian crossings.',
      startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
      endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
      status: 'ACTIVE',
      coordinates: '36.7841,-1.2925'
    }
  ]

  for (const consultation of consultations) {
    await prisma.publicConsultation.create({
      data: consultation
    })
  }

  console.log('✅ Created sample consultations')

  // Create some consultation votes and comments
  const activeConsultations = await prisma.publicConsultation.findMany({
    where: { status: 'ACTIVE' }
  })

  for (const consultation of activeConsultations) {
    // Create votes
    const voters = [resident1, resident2, adminUser]
    const voteTypes = ['support', 'support', 'neutral']
    
    for (let i = 0; i < voters.length; i++) {
      try {
        await prisma.consultationVote.create({
          data: {
            consultationId: consultation.id,
            userId: voters[i].id,
            vote: voteTypes[i]
          }
        })
      } catch (error) {
        console.log(`Vote already exists for consultation ${consultation.title}`)
      }
    }

    // Create comments
    const commenters = [resident1, resident2]
    const comments = [
      'This development plan looks comprehensive. I support the focus on green spaces.',
      'Traffic improvements are long overdue. Please prioritize pedestrian safety.'
    ]

    for (let i = 0; i < commenters.length; i++) {
      await prisma.consultationComment.create({
        data: {
          consultationId: consultation.id,
          userId: commenters[i].id,
          comment: comments[i]
        }
      })
    }
  }

  console.log('✅ Created consultation engagement data')

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
