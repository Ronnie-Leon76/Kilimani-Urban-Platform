import { NextRequest, NextResponse } from "next/server"
import { GeocodingService } from "@/lib/geocoding-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query) {
      return NextResponse.json({ error: "Query parameter 'q' is required" }, { status: 400 })
    }

    console.log('Testing geocoding search for:', query)
    const results = await GeocodingService.searchLocations(query)
    console.log('Geocoding results:', results)

    return NextResponse.json({
      query,
      results,
      count: results.length,
      message: results.length > 0 ? "Search successful" : "No results found"
    })

  } catch (error) {
    console.error("Geocoding test API error:", error)
    return NextResponse.json(
      { 
        error: "Internal server error", 
        details: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    )
  }
}
