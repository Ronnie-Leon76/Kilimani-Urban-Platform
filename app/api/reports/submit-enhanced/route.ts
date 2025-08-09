import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { LawAnalysisService } from "@/lib/law-analysis"
// Define Priority enum manually since it's not exported by @prisma/client
type Priority = "HIGH" | "MEDIUM" | "LOW";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { 
      title, 
      description, 
      type, 
      address, 
      latitude, 
      longitude, 
      images 
    } = body

    // Validate required fields
    if (!title || !description || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Analyze the report for law infractions
    console.log('Starting law analysis for report:', title)
    let lawAnalysis
    try {
      lawAnalysis = await LawAnalysisService.analyzeReport(
        title,
        description,
        type,
        address
      )
      console.log('Law analysis completed successfully:', lawAnalysis)
    } catch (lawAnalysisError) {
      console.error('Law analysis failed:', lawAnalysisError)
      // Provide fallback analysis based on report type
      lawAnalysis = {
        isHighPriority: ['ILLEGAL_DEVELOPMENT', 'INFRASTRUCTURE', 'FLOODING'].includes(type),
        infringedLaws: ['Manual legal review required due to analysis failure'],
        legalSummary: 'Automated legal analysis failed. This report requires manual review by the legal team.',
        recommendedActions: ['Manual legal review', 'Contact relevant authorities', 'Schedule site inspection'],
        requiresPublicConsultation: ['ILLEGAL_DEVELOPMENT', 'INFRASTRUCTURE'].includes(type),
        severityScore: type === 'ILLEGAL_DEVELOPMENT' ? 8 : type === 'INFRASTRUCTURE' ? 7 : 5
      }
    }
    // Set priority based on severity score
    let priority: Priority = "MEDIUM";
    if (lawAnalysis.severityScore >= 8) {
      priority = "HIGH";
    } else if (lawAnalysis.severityScore >= 6) {
      priority = "MEDIUM";
    } else {
      priority = "LOW";
    }

    // Create the report with law analysis data
    const report = await prisma.report.create({
      data: {
        id: `rpt_${Date.now().toString(36)}${Math.random().toString(36).substr(2, 9)}`,
        title,
        description,
        type,
        address: address || 'Location not specified',
        latitude: parseFloat(latitude) || 0,
        longitude: parseFloat(longitude) || 0,
        priority,
        status: "PENDING",
        User: { connect: { id: session.user.id } },
        images: { set: images || [] },
        infringedLaws: { set: lawAnalysis.infringedLaws },
        lawAnalysisDate: new Date(),
        // Enable public voting for high priority cases
        publicVotingEnabled: lawAnalysis.isHighPriority && lawAnalysis.requiresPublicConsultation,
        votingDeadline: lawAnalysis.isHighPriority && lawAnalysis.requiresPublicConsultation 
          ? new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days from now
          : null
      }
    })

    // If it's high priority and requires public consultation, create a public consultation
    if (lawAnalysis.isHighPriority && lawAnalysis.requiresPublicConsultation) {
      try {
        const consultation = await prisma.publicConsultation.create({
          data: {
            id: `pc_${Date.now().toString(36)}${Math.random().toString(36).substr(2, 9)}`,
            title: `Public Consultation: ${title}`,
            description: `
**URGENT COMMUNITY ISSUE REQUIRING PUBLIC INPUT**

**Original Report:** ${description}

**Location:** ${address || `Coordinates: ${latitude}, ${longitude}`}

**Legal Analysis Summary:**
${lawAnalysis.legalSummary}

**Laws Potentially Infringed:**
${lawAnalysis.infringedLaws.map(law => `• ${law}`).join('\n')}

**Recommended Actions:**
${lawAnalysis.recommendedActions.map(action => `• ${action}`).join('\n')}

**Why Public Input is Needed:**
This case has been classified as high priority based on legal analysis. The severity score is ${lawAnalysis.severityScore}/10, indicating significant community impact. Your vote and comments will help determine the appropriate response and priority level for government action.

**How to Participate:**
- Vote: Support urgent action, Oppose the proposed response, or remain Neutral
- Comment: Share your experience, concerns, or suggestions
- Deadline: You have 14 days to participate in this consultation

**Legal Basis:** ${lawAnalysis.legalSummary}
            `,
            startDate: new Date(),
            endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
            status: 'ACTIVE',
            coordinates: latitude && longitude ? {
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude)
            } : undefined
          }
        })

        console.log('Public consultation created for high priority report:', consultation.id)
        
        // Link the consultation to the report by updating the report with consultation reference
        await prisma.report.update({
          where: { id: report.id },
          data: {
            // Add a custom field to track linked consultation if your schema supports it
            // consultationId: consultation.id // Uncomment if you add this field to your schema
          }
        })

      } catch (consultationError) {
        console.error('Failed to create public consultation:', consultationError)
        // Continue anyway - the report was created successfully
      }
    }

    return NextResponse.json({
      message: "Report submitted successfully",
      report: {
        id: report.id,
        title: report.title,
        type: report.type,
        status: report.status,
        priority: report.priority,
        location: report.address || 'Location not specified',
        createdAt: report.createdAt.toLocaleDateString(),
        reporter: 'Anonymous', // You may fetch user info separately if needed
        lawAnalysis: {
          isHighPriority: lawAnalysis.isHighPriority,
          severityScore: lawAnalysis.severityScore,
          requiresPublicConsultation: lawAnalysis.requiresPublicConsultation,
          infringedLaws: lawAnalysis.infringedLaws,
          legalSummary: lawAnalysis.legalSummary,
          recommendedActions: lawAnalysis.recommendedActions
        },
        publicConsultationCreated: lawAnalysis.isHighPriority && lawAnalysis.requiresPublicConsultation
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        error: "Internal server error", 
        details: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    )
  }
}
