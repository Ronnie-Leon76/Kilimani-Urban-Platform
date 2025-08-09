import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface LawAnalysisResult {
  isHighPriority: boolean
  infringedLaws: string[]
  legalSummary: string
  recommendedActions: string[]
  requiresPublicConsultation: boolean
  severityScore: number // 1-10 scale
}

export class LawAnalysisService {
  /**
   * Analyze a report for law infractions using GPT-4
   */
  static async analyzeReport(
    title: string,
    description: string,
    type: string,
    location?: string
  ): Promise<LawAnalysisResult> {
    try {
      const prompt = `
You are a legal expert specializing in Kenyan urban planning and land use laws, specifically for Kilimani constituency in Nairobi County. 

Analyze the following report and determine:
1. What laws might be infringed upon
2. The severity of the issue (1-10 scale, where 10 is most severe)
3. Whether it requires public consultation (high priority cases do)
4. Recommended actions

Consider these key laws:
- The Constitution of Kenya 2010
- County Governments Act 17 of 2012
- Physical and Land Use Planning Act 13 of 2019
- Nairobi City County bylaws
- Environmental laws
- Building codes and regulations

Report Details:
Title: ${title}
Type: ${type}
Description: ${description}
Location: ${location || 'Not specified'}

Respond in the following JSON format (return ONLY the JSON, no markdown formatting or code blocks):
{
  "isHighPriority": boolean,
  "infringedLaws": ["law1", "law2", ...],
  "legalSummary": "brief summary of legal implications",
  "recommendedActions": ["action1", "action2", ...],
  "requiresPublicConsultation": boolean,
  "severityScore": number
}

Criteria for high priority (requires public consultation):
- Affects public health and safety
- Environmental violations
- Illegal developments
- Infrastructure issues affecting many residents
- Violations of constitutional rights
- Severity score >= 7
`

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a legal expert in Kenyan urban planning laws. Provide accurate, actionable legal analysis in the requested JSON format. Return ONLY valid JSON without any markdown formatting, code blocks, or additional text."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1000,
      })

      const response = completion.choices[0].message.content
      if (!response) {
        throw new Error('No response from OpenAI')
      }

      console.log('Raw OpenAI response:', response)

      // Clean the response by removing markdown code blocks and extra whitespace
      let cleanedResponse = response.trim()
      
      // Remove markdown code blocks if present
      if (cleanedResponse.startsWith('```json')) {
        cleanedResponse = cleanedResponse.replace(/^```json\s*/, '').replace(/\s*```$/, '')
      } else if (cleanedResponse.startsWith('```')) {
        cleanedResponse = cleanedResponse.replace(/^```\s*/, '').replace(/\s*```$/, '')
      }
      
      // Remove any leading/trailing whitespace again
      cleanedResponse = cleanedResponse.trim()
      
      console.log('Cleaned response for parsing:', cleanedResponse)

      // Parse the JSON response
      let analysis: LawAnalysisResult
      try {
        analysis = JSON.parse(cleanedResponse) as LawAnalysisResult
      } catch (parseError) {
        console.error('JSON parsing error:', parseError)
        console.error('Failed to parse response:', cleanedResponse)
        
        // Try to extract JSON from the response if it's embedded in text
        const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          try {
            analysis = JSON.parse(jsonMatch[0]) as LawAnalysisResult
            console.log('Successfully parsed JSON from extracted match')
          } catch (secondParseError) {
            console.error('Second JSON parsing attempt failed:', secondParseError)
            throw new Error('Failed to parse OpenAI response as JSON')
          }
        } else {
          throw new Error('No valid JSON found in OpenAI response')
        }
      }

      // Validate the response structure
      if (typeof analysis.isHighPriority !== 'boolean' ||
          !Array.isArray(analysis.infringedLaws) ||
          typeof analysis.legalSummary !== 'string' ||
          !Array.isArray(analysis.recommendedActions) ||
          typeof analysis.requiresPublicConsultation !== 'boolean' ||
          typeof analysis.severityScore !== 'number') {
        throw new Error('Invalid response structure from OpenAI')
      }

      return analysis

    } catch (error) {
      console.error('Law analysis error:', error)
      
      // Return a fallback analysis
      return {
        isHighPriority: type === 'ILLEGAL_DEVELOPMENT' || type === 'INFRASTRUCTURE',
        infringedLaws: ['Analysis unavailable - manual review required'],
        legalSummary: 'Automated legal analysis failed. Manual review by legal team required.',
        recommendedActions: ['Manual legal review', 'Contact relevant authorities'],
        requiresPublicConsultation: false,
        severityScore: 5
      }
    }
  }

  /**
   * Get law information for chatbot responses
   */
  static async getLawInformation(query: string): Promise<string> {
    try {
      const prompt = `
You are a legal assistant specialized in Kenyan land use and urban planning laws, particularly for Kilimani constituency, Nairobi County.

Answer the following question about land use laws, regulations, and procedures. Provide clear, accurate information that residents can understand.

Key laws to reference:
- The Constitution of Kenya 2010 (especially land rights)
- County Governments Act 17 of 2012
- Physical and Land Use Planning Act 13 of 2019
- Nairobi City County bylaws
- Environmental Management and Coordination Act
- Building codes and construction regulations

Question: ${query}

Provide a helpful, accurate response that:
1. Explains relevant laws and regulations
2. Outlines citizen rights and responsibilities
3. Suggests proper procedures or channels
4. Is written in simple, accessible language
5. Is specific to Kilimani/Nairobi context where relevant

Keep the response concise but comprehensive (max 500 words).
`

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful legal assistant for Kilimani residents. Provide accurate, accessible information about land use and urban planning laws."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.4,
        max_tokens: 800,
      })

      return completion.choices[0].message.content || 'I apologize, but I cannot provide information on that topic at the moment. Please consult with local authorities or legal experts.'

    } catch (error) {
      console.error('Law information error:', error)
      return 'I apologize, but I cannot access legal information at the moment. Please try again later or consult with local authorities.'
    }
  }
}

export default LawAnalysisService
