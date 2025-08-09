import fs from 'fs'
import path from 'path'
import pdfParse from 'pdf-parse'

export interface LawDocument {
  title: string
  content: string
  sections: LawSection[]
  keywords: string[]
}

export interface LawSection {
  number: string
  title: string
  content: string
  relevantTopics: string[]
}

export class LawDocumentProcessor {
  private static lawsCache: Map<string, LawDocument> = new Map()
  private static lawsDirectory = path.join(process.cwd(), 'laws')

  static async extractPDFText(filePath: string): Promise<string> {
    try {
      const dataBuffer = fs.readFileSync(filePath)
      const data = await pdfParse(dataBuffer)
      return data.text
    } catch (error) {
      console.error(`Error extracting PDF text from ${filePath}:`, error)
      return ''
    }
  }

  static processSections(text: string, documentType: string): LawSection[] {
    const sections: LawSection[] = []
    
    // Different regex patterns for different document types
    let sectionPattern: RegExp
    
    switch (documentType) {
      case 'constitution':
        // Pattern for Constitutional articles
        sectionPattern = /Article\s+(\d+)\s*\.?\s*([^\n]+)\n((?:(?!Article\s+\d+)[^\n]+\n?)*)/gi
        break
      case 'act':
        // Pattern for Act sections
        sectionPattern = /(?:Section|SECTION)\s+(\d+[A-Za-z]*)\s*\.?\s*([^\n]+)\n((?:(?!(?:Section|SECTION)\s+\d+)[^\n]+\n?)*)/gi
        break
      case 'plan':
        // Pattern for development plan chapters
        sectionPattern = /(?:Chapter|CHAPTER)\s+(\d+)\s*:?\s*([^\n]+)\n((?:(?!(?:Chapter|CHAPTER)\s+\d+)[^\n]+\n?)*)/gi
        break
      default:
        // Generic pattern
        sectionPattern = /(\d+(?:\.\d+)*)\s*\.?\s*([^\n]+)\n((?:(?!\d+(?:\.\d+)*\s*\.)[^\n]+\n?)*)/gi
    }

    let match
    while ((match = sectionPattern.exec(text)) !== null) {
      const sectionNumber = match[1]
      const sectionTitle = match[2].trim()
      const sectionContent = match[3].trim()

      if (sectionContent.length > 50) { // Filter out very short sections
        sections.push({
          number: sectionNumber,
          title: sectionTitle,
          content: sectionContent,
          relevantTopics: this.extractRelevantTopics(sectionTitle + ' ' + sectionContent)
        })
      }
    }

    return sections
  }

  static extractRelevantTopics(text: string): string[] {
    const topics: string[] = []
    const lowercaseText = text.toLowerCase()

    // Define topic keywords
    const topicKeywords = {
      'water': ['water', 'supply', 'sanitation', 'sewage', 'drainage', 'borehole', 'well'],
      'waste_management': ['waste', 'garbage', 'refuse', 'disposal', 'dump', 'landfill', 'recycling'],
      'infrastructure': ['road', 'bridge', 'building', 'construction', 'maintenance', 'repair', 'infrastructure'],
      'environment': ['environment', 'pollution', 'green', 'conservation', 'ecosystem', 'climate'],
      'development': ['development', 'planning', 'zoning', 'permit', 'approval', 'construction'],
      'public_health': ['health', 'safety', 'disease', 'epidemic', 'medical', 'hospital'],
      'housing': ['housing', 'shelter', 'accommodation', 'residence', 'dwelling'],
      'flooding': ['flood', 'drainage', 'storm', 'overflow', 'inundation'],
      'illegal_development': ['illegal', 'unauthorized', 'unlawful', 'violation', 'breach', 'contravention'],
      'governance': ['county', 'government', 'administration', 'authority', 'official', 'public']
    }

    for (const [topic, keywords] of Object.entries(topicKeywords)) {
      for (const keyword of keywords) {
        if (lowercaseText.includes(keyword)) {
          if (!topics.includes(topic)) {
            topics.push(topic)
          }
        }
      }
    }

    return topics
  }

  static async processLawDocument(filename: string): Promise<LawDocument | null> {
    try {
      const filePath = path.join(this.lawsDirectory, filename)
      
      if (!fs.existsSync(filePath)) {
        console.error(`Law document not found: ${filePath}`)
        return null
      }

      // Check cache first
      if (this.lawsCache.has(filename)) {
        return this.lawsCache.get(filename)!
      }

      const text = await this.extractPDFText(filePath)
      if (!text) {
        return null
      }

      // Determine document type from filename
      let documentType = 'act'
      if (filename.toLowerCase().includes('constitution')) {
        documentType = 'constitution'
      } else if (filename.toLowerCase().includes('plan')) {
        documentType = 'plan'
      }

      const sections = this.processSections(text, documentType)
      const keywords = this.extractRelevantTopics(text)

      const lawDocument: LawDocument = {
        title: this.extractTitle(filename, text),
        content: text,
        sections: sections,
        keywords: keywords
      }

      // Cache the processed document
      this.lawsCache.set(filename, lawDocument)
      return lawDocument

    } catch (error) {
      console.error(`Error processing law document ${filename}:`, error)
      return null
    }
  }

  static extractTitle(filename: string, text: string): string {
    // Try to extract title from the document text
    const titlePatterns = [
      /THE\s+([^\\n]+(?:ACT|CONSTITUTION|PLAN)[^\\n]*)/i,
      /([^\\n]+(?:ACT|CONSTITUTION|PLAN)[^\\n]*)/i
    ]

    for (const pattern of titlePatterns) {
      const match = text.match(pattern)
      if (match) {
        return match[1].trim()
      }
    }

    // Fallback to filename-based title
    return filename
      .replace(/\.(pdf|PDF)$/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
  }

  static async getAllLawDocuments(): Promise<LawDocument[]> {
    const documents: LawDocument[] = []
    
    try {
      // Check if laws directory exists
      if (!fs.existsSync(this.lawsDirectory)) {
        console.warn(`Laws directory not found: ${this.lawsDirectory}`)
        return documents
      }

      const files = fs.readdirSync(this.lawsDirectory)
      const supportedFiles = files.filter(file => {
        const ext = file.toLowerCase()
        return ext.endsWith('.pdf') || ext.endsWith('.txt')
      })

      console.log(`Found ${supportedFiles.length} law files to process`)

      for (const file of supportedFiles) {
        try {
          const document = await this.processLawDocument(file)
          if (document) {
            documents.push(document)
          }
        } catch (error) {
          console.error(`Failed to process law document ${file}:`, error)
          // Continue processing other files
        }
      }
    } catch (error) {
      console.error('Error reading laws directory:', error)
    }

    console.log(`Successfully loaded ${documents.length} law documents`)
    return documents
  }

  static findRelevantSections(query: string, reportType: string): LawSection[] {
    const relevantSections: LawSection[] = []
    const queryLower = query.toLowerCase()
    const topicMap: Record<string, string> = {
      'WATER_SHORTAGE': 'water',
      'WASTE_MANAGEMENT': 'waste_management',
      'INFRASTRUCTURE': 'infrastructure',
      'ILLEGAL_DEVELOPMENT': 'illegal_development',
      'FLOODING': 'flooding',
      'OTHER': 'governance'
    }

    const relevantTopic = topicMap[reportType] || 'governance'

    for (const document of this.lawsCache.values()) {
      for (const section of document.sections) {
        const sectionText = (section.title + ' ' + section.content).toLowerCase()
        
        // Check if section is relevant to the report type
        const isTopicRelevant = section.relevantTopics.includes(relevantTopic)
        
        // Check if section contains query keywords
        const containsQuery = queryLower.split(' ').some(word => 
          word.length > 3 && sectionText.includes(word)
        )

        if (isTopicRelevant || containsQuery) {
          relevantSections.push({
            ...section,
            relevantTopics: [...section.relevantTopics] // Copy to avoid mutation
          })
        }
      }
    }

    // Sort by relevance (sections with more matching topics first)
    return relevantSections.sort((a, b) => {
      const aRelevance = a.relevantTopics.filter(topic => 
        topic === relevantTopic || queryLower.includes(topic)
      ).length
      const bRelevance = b.relevantTopics.filter(topic => 
        topic === relevantTopic || queryLower.includes(topic)
      ).length
      return bRelevance - aRelevance
    }).slice(0, 10) // Return top 10 most relevant sections
  }
}

// Initialize the law documents on module load
export const initializeLawDocuments = async () => {
  console.log('Initializing law documents...')
  const documents = await LawDocumentProcessor.getAllLawDocuments()
  console.log(`Loaded ${documents.length} law documents`)
  return documents
}
