import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { GeocodingService } from "@/lib/geocoding-service"
import { LawDocumentProcessor, initializeLawDocuments } from "@/lib/law-processor"
import { OpenAI } from "openai"

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Initialize law documents
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

    const { 
      title, 
      description, 
      type, 
      priority, 
      locationSearch,
      latitude, 
      longitude, 
      address,
      images,
      autoAnalyzeLaws = true 
    } = await request.json()

    // Validate required fields
    if (!title || !description || !type) {
      return NextResponse.json({ 
        error: "Title, description, and type are required" 
      }, { status: 400 })
    }

    let finalLatitude = latitude
    let finalLongitude = longitude
    let finalAddress = address

    // If location search is provided, get coordinates
    if (locationSearch && (!latitude || !longitude)) {
      const locations = await GeocodingService.searchLocations(locationSearch)
      if (locations.length > 0) {
        finalLatitude = locations[0].latitude
        finalLongitude = locations[0].longitude
        finalAddress = locations[0].address
      }
    }

    // Validate coordinates
    if (!finalLatitude || !finalLongitude) {
      return NextResponse.json({ 
        error: "Valid coordinates are required. Use location search or provide latitude/longitude." 
      }, { status: 400 })
    }

    if (!GeocodingService.validateNairobiCoordinates(finalLatitude, finalLongitude)) {
      return NextResponse.json({ 
        error: "Location must be within Nairobi area" 
      }, { status: 400 })
    }

    // Get address if not provided
    if (!finalAddress) {
      finalAddress = await GeocodingService.reverseGeocode(finalLatitude, finalLongitude)
    }

    // Create the report
    const report = await prisma.report.create({
      data: {
        updatedAt: new Date(), // Set updatedAt to now
        title: title || "",
        description,
        type,
        priority: priority || "MEDIUM",
        latitude: finalLatitude,
        longitude: finalLongitude,
        address: finalAddress,
        images: images || [],
        userId: session.user.id
      },
      select: {
        id: true,
        title: true,
        description: true,
        type: true,
        status: true,
        priority: true,
        latitude: true,
        longitude: true,
        address: true,
        images: true,
        createdAt: true,
        user: {
          select: { name: true, email: true }
        }
      }
    })

    let lawAnalysis = null
    let publicParticipationTriggered = false

    // Perform automatic law analysis if requested
    if (autoAnalyzeLaws) {
      try {
        // Initialize law documents
        await initializeLaws()

        // Find relevant law sections
        const relevantSections = LawDocumentProcessor.findRelevantSections(
          `${title} ${description}`,
          type
        )

        // Prepare context from actual law documents
        const lawContext = relevantSections.map(section => 
          `${section.number}. ${section.title}\n${section.content.substring(0, 400)}...`
        ).join('\n\n')

        // Prepare analysis prompt
        const analysisPrompt = `
Analyze this new community report for potential law infractions in Nairobi, Kenya:

REPORT DETAILS:
Title: ${title}
Type: ${type}
Description: ${description}
Location: ${finalAddress}
Priority: ${priority || "MEDIUM"}

RELEVANT LAW SECTIONS:
${lawContext}

TASK: Analyze this ${type} issue and provide:
1. Which specific laws support the resident's complaint
2. What violations may have occurred
3. Whether this requires urgent attention and public participation
4. Specific legal basis for action

Respond in JSON format:
{
  "supportingLaws": ["Laws that support the resident's rights and complaint"],
  "potentialViolations": ["Specific law violations that may have occurred"],
  "severity": "LOW|MEDIUM|HIGH|CRITICAL",
  "urgencyLevel": "LOW|MEDIUM|HIGH|CRITICAL",
  "requiresPublicParticipation": true/false,
  "reasoning": "Legal analysis explaining the findings",
  "recommendedActions": ["Immediate actions authorities should take"],
  "residentRights": ["Specific rights being violated or at risk"],
  "legalBasis": "Constitutional or statutory basis for complaint"
}

Focus on empowering the resident with legal knowledge about their rights and complaint.`

        // Call AI for analysis
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You are a legal assistant helping residents understand their rights and the legal basis for their complaints. Provide empowering legal analysis that helps residents understand what laws support their case."
            },
            {
              role: "user",
              content: analysisPrompt
            }
          ],
          temperature: 0.3,
          max_tokens: 1500
        })

        const analysisResult = completion.choices[0]?.message?.content

        if (analysisResult) {
          try {
            lawAnalysis = JSON.parse(analysisResult)
            
            // Determine if public participation should be triggered
            publicParticipationTriggered = 
              lawAnalysis.severity === "CRITICAL" || 
              lawAnalysis.urgencyLevel === "CRITICAL" ||
              lawAnalysis.requiresPublicParticipation === true ||
              (lawAnalysis.severity === "HIGH" && ["ILLEGAL_DEVELOPMENT", "WATER_SHORTAGE", "FLOODING"].includes(type))

            // Update report with analysis
            await prisma.report.update({
              where: { id: report.id },
              data: {
                infringedLaws: [
                  ...(lawAnalysis.supportingLaws || []),
                  ...(lawAnalysis.potentialViolations || [])
                ],
                lawAnalysisDate: new Date(),
                priority: lawAnalysis.severity === "CRITICAL" ? "CRITICAL" : 
                         lawAnalysis.severity === "HIGH" ? "HIGH" : 
                         priority || "MEDIUM",
                publicVotingEnabled: publicParticipationTriggered,
                votingDeadline: publicParticipationTriggered ? 
                  new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) : null
              }
            })

          } catch (parseError) {
            console.error("Error parsing law analysis:", parseError)
            lawAnalysis = {
              supportingLaws: relevantSections.slice(0, 3).map(s => `${s.number}. ${s.title}`),
              reasoning: "Analysis completed with relevant law sections identified",
              severity: "MEDIUM"
            }
          }
        }

      } catch (analysisError) {
        console.error("Law analysis error:", analysisError)
        // Continue without analysis
      }
    }

    return NextResponse.json({
      success: true,
      message: "Report created successfully",
      report: {
        id: report.id,
        title: report.title,
        description: report.description,
        type: report.type,
        status: report.status,
        priority: report.priority,
        latitude: report.latitude,
        longitude: report.longitude,
        address: report.address,
        images: report.images,
        createdAt: report.createdAt,
        reporter: report.user?.name
      },
      location: {
        latitude: finalLatitude,
        longitude: finalLongitude,
        address: finalAddress
      },
      lawAnalysis: lawAnalysis,
      publicParticipationTriggered: publicParticipationTriggered,
      message_to_resident: lawAnalysis ? 
        `Your report has been submitted and analyzed. ${lawAnalysis.supportingLaws?.length || 0} laws support your complaint. ${publicParticipationTriggered ? 'Due to the severity of this issue, public participation has been triggered.' : ''}` :
        "Your report has been submitted successfully."
    })

  } catch (error) {
    console.error("Enhanced report creation error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
