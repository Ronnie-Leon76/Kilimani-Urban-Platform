import axios from 'axios'

export interface LocationResult {
  name: string
  address: string
  latitude: number
  longitude: number
  boundingBox?: {
    northeast: { lat: number; lng: number }
    southwest: { lat: number; lng: number }
  }
}

export class GeocodingService {
  private static readonly NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org'
  
  static async searchLocations(query: string, boundingBox?: string): Promise<LocationResult[]> {
    try {
      console.log('Searching for location:', query)
      
      // Try multiple search strategies
      const searchStrategies = [
        // Strategy 1: Search within Kilimani specifically
        `${query}, Kilimani, Nairobi, Kenya`,
        // Strategy 2: Search within Nairobi
        `${query}, Nairobi, Kenya`,
        // Strategy 3: Just the query with Kenya
        `${query}, Kenya`,
        // Strategy 4: Just the query
        query
      ]

      let allResults: LocationResult[] = []

      for (const searchQuery of searchStrategies) {
        console.log('Trying search strategy:', searchQuery)
        
        const params = new URLSearchParams({
          q: searchQuery,
          format: 'json',
          limit: '20',
          addressdetails: '1',
          extratags: '1',
          namedetails: '1',
          countrycodes: 'KE' // Limit to Kenya
        })

        // Add bounding box for Nairobi if provided
        if (boundingBox || searchQuery.includes('Nairobi')) {
          const nairobiBoundingBox = boundingBox || '-1.444471,36.651993,-1.163332,37.10659'
          params.append('viewbox', nairobiBoundingBox)
          params.append('bounded', '1')
        }

        try {
          const response = await axios.get(`${this.NOMINATIM_BASE_URL}/search?${params}`, {
            headers: {
              'User-Agent': 'KilimaniUrbanPlatform/1.0',
              'Accept': 'application/json'
            },
            timeout: 10000 // 10 second timeout
          })

          console.log('Search response for', searchQuery, ':', response.data.length, 'results')

          if (response.data && response.data.length > 0) {
            const results: LocationResult[] = response.data.map((item: any) => ({
              name: item.display_name.split(',')[0] || item.name || query,
              address: item.display_name,
              latitude: parseFloat(item.lat),
              longitude: parseFloat(item.lon),
              boundingBox: item.boundingbox ? {
                northeast: {
                  lat: parseFloat(item.boundingbox[1]),
                  lng: parseFloat(item.boundingbox[3])
                },
                southwest: {
                  lat: parseFloat(item.boundingbox[0]),
                  lng: parseFloat(item.boundingbox[2])
                }
              } : undefined
            }))

            // Filter results to prioritize Nairobi/Kilimani area
            const filteredResults = results.filter(result => {
              const isValidCoordinate = !isNaN(result.latitude) && !isNaN(result.longitude)
              const isInNairobi = result.latitude >= -1.5 && result.latitude <= -1.0 &&
                                 result.longitude >= 36.6 && result.longitude <= 37.3
              const mentionsNairobi = result.address.toLowerCase().includes('nairobi') ||
                                     result.address.toLowerCase().includes('kilimani')
              
              return isValidCoordinate && (isInNairobi || mentionsNairobi)
            })

            console.log('Filtered results for', searchQuery, ':', filteredResults.length)
            allResults = [...allResults, ...filteredResults]

            // If we found good results, break early
            if (filteredResults.length > 0) {
              break
            }
          }
        } catch (requestError) {
          console.error('Request error for', searchQuery, ':', requestError)
          continue
        }
      }

      // Remove duplicates based on coordinates
      const uniqueResults = allResults.filter((result, index, self) => 
        index === self.findIndex(r => 
          Math.abs(r.latitude - result.latitude) < 0.001 && 
          Math.abs(r.longitude - result.longitude) < 0.001
        )
      )

      console.log('Final unique results:', uniqueResults.length)
      return uniqueResults.slice(0, 10) // Limit to 10 results

    } catch (error) {
      console.error('Geocoding error:', error)
      return []
    }
  }

  static async reverseGeocode(latitude: number, longitude: number): Promise<string> {
    try {
      const params = new URLSearchParams({
        lat: latitude.toString(),
        lon: longitude.toString(),
        format: 'json',
        addressdetails: '1'
      })

      const response = await axios.get(`${this.NOMINATIM_BASE_URL}/reverse?${params}`, {
        headers: {
          'User-Agent': 'KilimaniUrbanPlatform/1.0'
        }
      })

      return response.data.display_name || `${latitude}, ${longitude}`
    } catch (error) {
      console.error('Reverse geocoding error:', error)
      return `${latitude}, ${longitude}`
    }
  }

  static async getNearbyLandmarks(latitude: number, longitude: number, radius: number = 1000): Promise<LocationResult[]> {
    try {
      // Search for nearby points of interest
      const params = new URLSearchParams({
        format: 'json',
        limit: '20',
        addressdetails: '1',
        extratags: '1'
      })

      // Create a bounding box around the point
      const latOffset = radius / 111000 // Approximate meters to degrees
      const lngOffset = radius / (111000 * Math.cos(latitude * Math.PI / 180))
      
      const bbox = `${longitude - lngOffset},${latitude - latOffset},${longitude + lngOffset},${latitude + latOffset}`
      params.append('viewbox', bbox)
      params.append('bounded', '1')

      const response = await axios.get(`${this.NOMINATIM_BASE_URL}/search?${params}`, {
        headers: {
          'User-Agent': 'KilimaniUrbanPlatform/1.0'
        }
      })

      return response.data.map((item: any) => ({
        name: item.display_name.split(',')[0],
        address: item.display_name,
        latitude: parseFloat(item.lat),
        longitude: parseFloat(item.lon)
      })).slice(0, 10)

    } catch (error) {
      console.error('Nearby landmarks error:', error)
      return []
    }
  }

  static validateNairobiCoordinates(latitude: number, longitude: number): boolean {
    // Check if coordinates are within reasonable Nairobi bounds
    return latitude >= -1.5 && latitude <= -1.1 && 
           longitude >= 36.6 && longitude <= 37.2
  }
}
