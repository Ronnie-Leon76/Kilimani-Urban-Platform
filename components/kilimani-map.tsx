"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

// Kilimani Ward approximate boundaries
const KILIMANI_BOUNDS: [number, number, number, number] = [
  36.78,
  -1.31, // Southwest coordinates
  36.82,
  -1.28, // Northeast coordinates
]

const KILIMANI_CENTER: [number, number] = [36.8, -1.295]

export function KilimaniMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng] = useState(KILIMANI_CENTER[0])
  const [lat] = useState(KILIMANI_CENTER[1])
  const [zoom] = useState(14)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    // Set your Mapbox access token here
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    
    if (mapboxToken && mapboxToken.startsWith('pk.')) {
      mapboxgl.accessToken = mapboxToken
    } else {
      // Use a free alternative if no valid Mapbox token is provided
      console.warn("No valid Mapbox token found. Using OpenStreetMap style.")
    }

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapboxToken && mapboxToken.startsWith('pk.')
          ? "mapbox://styles/mapbox/streets-v12"
          : {
              version: 8,
              sources: {
                "osm": {
                  type: "raster",
                  tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                  tileSize: 256,
                  attribution: "© OpenStreetMap contributors"
                }
              },
              layers: [{
                id: "osm",
                type: "raster",
                source: "osm"
              }]
            },
        center: [lng, lat],
        zoom: zoom,
        maxBounds: KILIMANI_BOUNDS,
      })

      // Add navigation control
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

      // Add sample markers for demonstration
      const sampleReports = [
        { lng: 36.805, lat: -1.292, title: "Water Shortage", type: "water" },
        { lng: 36.81, lat: -1.298, title: "Road Damage", type: "infrastructure" },
        { lng: 36.795, lat: -1.29, title: "Flooding Area", type: "flooding" },
      ]

      sampleReports.forEach((report) => {
        const el = document.createElement("div")
        el.className = "marker"
        el.style.backgroundColor = getMarkerColor(report.type)
        el.style.width = "12px"
        el.style.height = "12px"
        el.style.borderRadius = "50%"
        el.style.border = "2px solid white"
        el.style.cursor = "pointer"

        new mapboxgl.Marker(el)
          .setLngLat([report.lng, report.lat])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${report.title}</h3><p>Type: ${report.type}</p>`))
          .addTo(map.current!)
      })

      // Add Kilimani ward boundary (approximate)
      map.current.on("load", () => {
        map.current!.addSource("kilimani-boundary", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [36.78, -1.31],
                  [36.82, -1.31],
                  [36.82, -1.28],
                  [36.78, -1.28],
                  [36.78, -1.31],
                ],
              ],
            },
          },
        })

        map.current!.addLayer({
          id: "kilimani-boundary",
          type: "line",
          source: "kilimani-boundary",
          layout: {},
          paint: {
            "line-color": "#10b981",
            "line-width": 3,
            "line-opacity": 0.8,
          },
        })

        map.current!.addLayer({
          id: "kilimani-fill",
          type: "fill",
          source: "kilimani-boundary",
          layout: {},
          paint: {
            "fill-color": "#10b981",
            "fill-opacity": 0.1,
          },
        })
      })
    }

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [lng, lat, zoom])

  const getMarkerColor = (type: string) => {
    switch (type) {
      case "water":
        return "#3b82f6"
      case "infrastructure":
        return "#f59e0b"
      case "flooding":
        return "#ef4444"
      case "waste":
        return "#8b5cf6"
      default:
        return "#6b7280"
    }
  }

  return (
    <div className="relative">
      <div ref={mapContainer} className="h-96 w-full rounded-lg" />
      <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
        <h4 className="font-semibold text-sm mb-2">Legend</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Water Issues</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Infrastructure</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Flooding</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>Waste Management</span>
          </div>
        </div>
      </div>
    </div>
  )
}