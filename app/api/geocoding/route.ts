import { NextRequest, NextResponse } from "next/server"
import { GeocodingService } from "@/lib/geocoding-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const action = searchParams.get('action')
    
    if (!query) {
      return NextResponse.json({ error: "Query parameter 'q' is required" }, { status: 400 })
    }

    if (action === 'search') {
      // Search for locations
      const locations = await GeocodingService.searchLocations(query)
      
      return NextResponse.json({
        success: true,
        locations: locations.map(location => ({
          name: location.name,
          address: location.address,
          latitude: location.latitude,
          longitude: location.longitude,
          boundingBox: location.boundingBox
        }))
      })
    }

    if (action === 'reverse') {
      // Reverse geocoding
      const lat = parseFloat(searchParams.get('lat') || '0')
      const lng = parseFloat(searchParams.get('lng') || '0')
      
      if (!lat || !lng) {
        return NextResponse.json({ 
          error: "Latitude and longitude parameters are required for reverse geocoding" 
        }, { status: 400 })
      }

      if (!GeocodingService.validateNairobiCoordinates(lat, lng)) {
        return NextResponse.json({ 
          error: "Coordinates must be within Nairobi area" 
        }, { status: 400 })
      }

      const address = await GeocodingService.reverseGeocode(lat, lng)
      const landmarks = await GeocodingService.getNearbyLandmarks(lat, lng)
      
      return NextResponse.json({
        success: true,
        address: address,
        landmarks: landmarks,
        coordinates: { latitude: lat, longitude: lng }
      })
    }

    if (action === 'landmarks') {
      // Get nearby landmarks
      const lat = parseFloat(searchParams.get('lat') || '0')
      const lng = parseFloat(searchParams.get('lng') || '0')
      const radius = parseInt(searchParams.get('radius') || '1000')
      
      if (!lat || !lng) {
        return NextResponse.json({ 
          error: "Latitude and longitude parameters are required" 
        }, { status: 400 })
      }

      const landmarks = await GeocodingService.getNearbyLandmarks(lat, lng, radius)
      
      return NextResponse.json({
        success: true,
        landmarks: landmarks,
        center: { latitude: lat, longitude: lng },
        radius: radius
      })
    }

    return NextResponse.json({ 
      error: "Invalid action. Use 'search', 'reverse', or 'landmarks'" 
    }, { status: 400 })

  } catch (error) {
    console.error("Geocoding API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
