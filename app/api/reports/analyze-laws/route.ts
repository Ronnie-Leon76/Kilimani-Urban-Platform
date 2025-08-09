import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { OpenAI } from "openai"
import { LawDocumentProcessor, initializeLawDocuments } from "@/lib/law-processor"

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Initialize law documents on module load
let lawDocumentsInitialized = false
const initializeLaws = async () => {
  if (!lawDocumentsInitialized) {
    await initializeLawDocuments()
    lawDocumentsInitialized = true
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as { user?: { id: string } } | null;
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user has permission (government official or admin)
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true }
    })

    if (!user || !["ADMIN", "GOVERNMENT_OFFICIAL"].includes(user.role)) {
      return NextResponse.json({ 
        error: "Forbidden - Government access required" 
      }, { status: 403 })
    }

    const { reportId } = await request.json()

    if (!reportId) {
      return NextResponse.json({ error: "Report ID is required" }, { status: 400 })
    }

    // Initialize law documents if not already done
    await initializeLaws()

    // Get report details
    const report = await prisma.report.findUnique({
      where: { id: reportId },
      include: {
        User: {
          select: { name: true, email: true }
        }
      }
    })

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 })
    }

    // Find relevant law sections based on the report
    const relevantSections = LawDocumentProcessor.findRelevantSections(
      `${report.title} ${report.description}`,
      report.type
    )

    // Prepare context from actual law documents
    const lawContext = relevantSections.map(section => 
      `${section.number}. ${section.title}\n${section.content.substring(0, 500)}...`
    ).join('\n\n')

    // Prepare prompt for GPT-4-Omni-Mini with actual law content
    const analysisPrompt = `
Analyze the following community report for potential law infractions in Nairobi, Kenya:

REPORT DETAILS:
Title: ${report.title}
Type: ${report.type}
Description: ${report.description}
Location: ${report.address || `Coordinates: ${report.latitude}, ${report.longitude}`}
Priority: ${report.priority}

RELEVANT LAW SECTIONS FROM ACTUAL DOCUMENTS:
${lawContext}

TASK: Based on the report details and the actual law sections provided above, identify which specific laws or regulations may have been infringed. 

Provide your analysis in the following JSON format:
{
  "infringedLaws": ["Specific law sections that may be violated with exact section numbers"],
  "severity": "LOW|MEDIUM|HIGH|CRITICAL",
  "reasoning": "Detailed explanation of why these specific laws apply, referencing the exact sections",
  "recommendedActions": ["List of specific recommended actions for authorities"],
  "requiresPublicConsultation": true/false,
  "legalBasis": "Constitutional or statutory basis for action with specific article/section references",
  "urgencyLevel": "LOW|MEDIUM|HIGH|CRITICAL",
  "publicParticipationRequired": true/false,
  "supportingLaws": ["Additional laws that support the resident's complaint"]
}

Focus on:
1. Exact law violations with specific section references
2. Whether this is a gross violation requiring urgent attention
3. Laws that support the resident's rights and complaint
4. Whether public participation is needed based on severity and community impact

Be precise with law section references and explain how they specifically apply to this ${report.type} issue.`

    try {
      // Call GPT-4-Omni-Mini for analysis
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a legal expert specializing in Kenyan urban planning and governance law. Analyze community reports using actual law sections and provide precise legal analysis with exact section references. Determine urgency levels and public participation requirements based on legal severity and community impact."
          },
          {
            role: "user",
            content: analysisPrompt
          }
        ],
        temperature: 0.2, // Lower temperature for more precise legal analysis
        max_tokens: 2000
      })

      const analysisResult = completion.choices[0]?.message?.content

      if (!analysisResult) {
        throw new Error("No analysis result received from AI")
      }

      // Parse the JSON response
      let analysis
      try {
        analysis = JSON.parse(analysisResult)
      } catch (parseError) {
        // If JSON parsing fails, create a structured response from text
        analysis = {
          infringedLaws: extractLawsFromText(analysisResult, relevantSections),
          severity: determineSeverity(report.type, analysisResult),
          reasoning: analysisResult,
          recommendedActions: ["Manual legal review required", "Detailed investigation needed"],
          requiresPublicConsultation: shouldRequirePublicConsultation(report.type),
          legalBasis: "Manual analysis required",
          urgencyLevel: determineSeverity(report.type, analysisResult),
          publicParticipationRequired: shouldRequirePublicConsultation(report.type),
          supportingLaws: relevantSections.slice(0, 3).map(s => `${s.number}. ${s.title}`)
        }
      }

      // Determine if this should trigger public participation
      const shouldTriggerPublicParticipation = 
        analysis.severity === "CRITICAL" || 
        analysis.urgencyLevel === "CRITICAL" ||
        analysis.publicParticipationRequired === true ||
        (analysis.severity === "HIGH" && ["ILLEGAL_DEVELOPMENT", "WATER_SHORTAGE", "FLOODING"].includes(report.type))

      // Update report with analysis results
      const updatedReport = await prisma.report.update({
        where: { id: reportId },
        data: {
          infringedLaws: analysis.infringedLaws || [],
          lawAnalysisDate: new Date(),
          // Update priority if analysis suggests higher severity
          priority: analysis.severity === "CRITICAL" ? "CRITICAL" : 
                   analysis.severity === "HIGH" ? "HIGH" : report.priority,
          // Enable public voting if recommended
          publicVotingEnabled: shouldTriggerPublicParticipation,
          votingDeadline: shouldTriggerPublicParticipation ? 
            new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) : null // 14 days from now
        }
      })

      return NextResponse.json({
        success: true,
        analysis: {
          ...analysis,
          relevantSections: relevantSections.slice(0, 5).map(section => ({
            number: section.number,
            title: section.title,
            content: section.content.substring(0, 300) + (section.content.length > 300 ? '...' : ''),
            topics: section.relevantTopics
          }))
        },
        report: {
          id: updatedReport.id,
          infringedLaws: updatedReport.infringedLaws,
          priority: updatedReport.priority,
          publicVotingEnabled: updatedReport.publicVotingEnabled,
          votingDeadline: updatedReport.votingDeadline
        },
        publicParticipationTriggered: shouldTriggerPublicParticipation
      })

    } catch (aiError) {
      console.error("AI Analysis error:", aiError)
      
      // Enhanced fallback analysis using actual law sections
      const fallbackAnalysis = generateEnhancedFallbackAnalysis(report.type, relevantSections)
      
      const updatedReport = await prisma.report.update({
        where: { id: reportId },
        data: {
          infringedLaws: fallbackAnalysis.infringedLaws,
          lawAnalysisDate: new Date(),
          publicVotingEnabled: fallbackAnalysis.requiresPublicConsultation,
          priority: fallbackAnalysis.severity === "HIGH" ? "HIGH" : report.priority
        }
      })

      return NextResponse.json({
        success: true,
        analysis: fallbackAnalysis,
        report: {
          id: updatedReport.id,
          infringedLaws: updatedReport.infringedLaws,
          priority: updatedReport.priority,
          publicVotingEnabled: updatedReport.publicVotingEnabled
        },
        warning: "AI analysis unavailable, enhanced fallback analysis used with actual law sections"
      })
    }

  } catch (error) {
    console.error("Law analysis API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Helper functions for analysis
function extractLawsFromText(text: string, relevantSections: any[]): string[] {
  const laws: string[] = []
  const textLower = text.toLowerCase()
  
  for (const section of relevantSections.slice(0, 5)) {
    if (textLower.includes(section.number.toLowerCase()) || 
        textLower.includes(section.title.toLowerCase().substring(0, 20))) {
      laws.push(`${section.number}. ${section.title}`)
    }
  }
  
  return laws.length > 0 ? laws : [`Manual review required - ${relevantSections.length} relevant sections found`]
}

function determineSeverity(reportType: string, analysisText: string): string {
  const criticalKeywords = ['urgent', 'critical', 'emergency', 'severe', 'gross violation', 'immediate']
  const highKeywords = ['high', 'significant', 'serious', 'major', 'violation']
  
  const textLower = analysisText.toLowerCase()
  
  if (criticalKeywords.some(keyword => textLower.includes(keyword))) {
    return "CRITICAL"
  }
  
  if (highKeywords.some(keyword => textLower.includes(keyword))) {
    return "HIGH"
  }
  
  // Report type based severity
  if (["ILLEGAL_DEVELOPMENT", "FLOODING"].includes(reportType)) {
    return "HIGH"
  }
  
  return "MEDIUM"
}

function shouldRequirePublicConsultation(reportType: string): boolean {
  return ["ILLEGAL_DEVELOPMENT", "WATER_SHORTAGE", "FLOODING", "INFRASTRUCTURE"].includes(reportType)
}

function generateEnhancedFallbackAnalysis(reportType: string, relevantSections: any[]) {
  const topSections = relevantSections.slice(0, 3)
  
  const analysisMap: Record<string, any> = {
    "ILLEGAL_DEVELOPMENT": {
      laws: topSections.map(s => `${s.number}. ${s.title}`) || [
        "Physical and Land Use Planning Act 2019, Sections 32-35: Development without permits",
        "County Governments Act 2012, Section 104: Unauthorized construction"
      ],
      severity: "HIGH",
      requiresVoting: true,
      urgencyLevel: "HIGH",
      actions: ["Issue stop work order", "Require proper permits", "Demolition if non-compliant"],
      basis: "Constitutional Article 42 and Planning Act 2019",
      supportingLaws: topSections.map(s => `${s.number}. ${s.title}`).slice(0, 2)
    },
    "WASTE_MANAGEMENT": {
      laws: topSections.map(s => `${s.number}. ${s.title}`) || [
        "County Governments Act 2012, Sections 104-106: Solid waste management",
        "Public Health Act: Improper waste disposal"
      ],
      severity: "MEDIUM",
      requiresVoting: false,
      urgencyLevel: "MEDIUM",
      actions: ["Clean-up order", "Improve waste collection", "Public health measures"],
      basis: "County Governments Act 2012",
      supportingLaws: topSections.map(s => `${s.number}. ${s.title}`).slice(0, 2)
    },
    "WATER_SHORTAGE": {
      laws: topSections.map(s => `${s.number}. ${s.title}`) || [
        "Constitution of Kenya 2010, Article 43: Right to clean water",
        "County Governments Act 2012, Sections 100-103: Water services"
      ],
      severity: "HIGH",
      requiresVoting: true,
      urgencyLevel: "HIGH",
      actions: ["Emergency water supply", "Infrastructure upgrade", "Service provider accountability"],
      basis: "Constitutional right to water",
      supportingLaws: topSections.map(s => `${s.number}. ${s.title}`).slice(0, 2)
    },
    "INFRASTRUCTURE": {
      laws: topSections.map(s => `${s.number}. ${s.title}`) || [
        "County Governments Act 2012: Infrastructure maintenance",
        "Nairobi County Development Plan: Infrastructure standards"
      ],
      severity: "MEDIUM",
      requiresVoting: false,
      urgencyLevel: "MEDIUM",
      actions: ["Infrastructure repair", "Maintenance schedule", "Safety measures"],
      basis: "County service delivery mandate",
      supportingLaws: topSections.map(s => `${s.number}. ${s.title}`).slice(0, 2)
    },
    "FLOODING": {
      laws: topSections.map(s => `${s.number}. ${s.title}`) || [
        "Physical and Land Use Planning Act 2019: Environmental compliance",
        "Constitution Article 42: Environmental rights"
      ],
      severity: "HIGH",
      requiresVoting: true,
      urgencyLevel: "CRITICAL",
      actions: ["Drainage improvement", "Emergency response", "Environmental assessment"],
      basis: "Environmental protection mandate",
      supportingLaws: topSections.map(s => `${s.number}. ${s.title}`).slice(0, 2)
    }
  }

  const analysis = analysisMap[reportType] || {
    laws: topSections.map(s => `${s.number}. ${s.title}`) || ["Manual legal review required"],
    severity: "MEDIUM",
    requiresVoting: false,
    urgencyLevel: "MEDIUM",
    actions: ["Investigation required"],
    basis: "General legal review",
    supportingLaws: topSections.map(s => `${s.number}. ${s.title}`).slice(0, 2)
  }

  return {
    infringedLaws: analysis.laws,
    severity: analysis.severity,
    reasoning: `Fallback analysis based on ${reportType} and ${relevantSections.length} relevant law sections found`,
    recommendedActions: analysis.actions,
    requiresPublicConsultation: analysis.requiresVoting,
    legalBasis: analysis.basis,
    urgencyLevel: analysis.urgencyLevel,
    publicParticipationRequired: analysis.requiresVoting,
    supportingLaws: analysis.supportingLaws,
    relevantSections: relevantSections.slice(0, 3).map(section => ({
      number: section.number,
      title: section.title,
      content: section.content.substring(0, 200) + '...',
      topics: section.relevantTopics
    }))
  }
}
