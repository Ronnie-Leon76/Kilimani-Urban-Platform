import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { CloudinaryService } from "@/lib/cloudinary"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const files = formData.getAll('files') as File[]
    
    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 })
    }

    // Convert files to base64 for Cloudinary upload
    const uploadPromises = files.map(async (file) => {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const base64 = `data:${file.type};base64,${buffer.toString('base64')}`
      
      return CloudinaryService.uploadFile(base64, 'kilimani-reports')
    })

    const uploadResults = await Promise.all(uploadPromises)
    
    return NextResponse.json({
      message: "Files uploaded successfully",
      files: uploadResults.map(result => ({
        url: result.secure_url,
        publicId: result.public_id,
        format: result.format,
        width: result.width,
        height: result.height,
      }))
    })

  } catch (error) {
    console.error("Upload API error:", error)
    return NextResponse.json(
      { error: "Failed to upload files" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Generate signed upload parameters for client-side upload
    const uploadConfig = CloudinaryService.generateSignedUploadUrl('kilimani-reports')
    
    return NextResponse.json(uploadConfig)

  } catch (error) {
    console.error("Upload config API error:", error)
    return NextResponse.json(
      { error: "Failed to generate upload configuration" },
      { status: 500 }
    )
  }
}
