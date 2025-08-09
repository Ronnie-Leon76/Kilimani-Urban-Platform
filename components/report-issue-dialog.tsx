"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, Camera, Upload, Search, Loader2, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { GeocodingService, LocationResult } from "@/lib/geocoding-service"

interface ReportIssueDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess?: () => void
}

export function ReportIssueDialog({ open, onOpenChange, onSuccess }: ReportIssueDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    address: "",
    latitude: "",
    longitude: "",
  })
  const [locationType, setLocationType] = useState<"search" | "current">("search")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<LocationResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [isUploadingFiles, setIsUploadingFiles] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const reportTypes = [
    { value: "INFRASTRUCTURE", label: "Infrastructure Issues" },
    { value: "WATER_SHORTAGE", label: "Water Shortage" },
    { value: "FLOODING", label: "Flooding" },
    { value: "WASTE_MANAGEMENT", label: "Waste Management" },
    { value: "ILLEGAL_DEVELOPMENT", label: "Illegal Development" },
    { value: "OTHER", label: "Other" },
  ]

  const searchLocation = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)
    setSearchResults([]) // Clear previous results
    
    try {
      console.log('Searching for:', searchQuery)
      
      // Use the geocoding API endpoint instead of calling the service directly
      const response = await fetch(`/api/geocoding?q=${encodeURIComponent(searchQuery)}&action=search`)
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.statusText}`)
      }
      
      const data = await response.json()
      console.log('Search API response:', data)
      
      const results = data.locations || []
      setSearchResults(results)
      
      if (results.length === 0) {
        toast({
          title: "No results found",
          description: "Try searching for landmarks, streets, or buildings in Kilimani. Example: 'Yaya Centre', 'Kilimani Primary School', 'Denis Pritt Road'",
          variant: "destructive",
        })
      } else {
        toast({
          title: `Found ${results.length} location(s)`,
          description: "Select the most accurate location from the results below.",
        })
      }
    } catch (error) {
      console.error('Search error:', error)
      toast({
        title: "Search error",
        description: "Unable to search for locations. Please check your internet connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSearching(false)
    }
  }

  const selectLocation = (location: LocationResult) => {
    setFormData(prev => ({
      ...prev,
      address: location.address,
      latitude: location.latitude.toString(),
      longitude: location.longitude.toString(),
    }))
    setSearchResults([])
    setSearchQuery("")
    toast({
      title: "Location selected",
      description: `Selected: ${location.name}`,
    })
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          
          // Validate that coordinates are within Kilimani/Nairobi area
          if (!GeocodingService.validateNairobiCoordinates(lat, lng)) {
            toast({
              title: "Location outside Kilimani",
              description: "The detected location appears to be outside Kilimani constituency. Please verify or search manually.",
              variant: "destructive",
            })
            return
          }

          setFormData((prev) => ({
            ...prev,
            latitude: lat.toString(),
            longitude: lng.toString(),
          }))

          // Get address from coordinates using the API
          try {
            const response = await fetch(`/api/geocoding?action=reverse&lat=${lat}&lng=${lng}`)
            if (response.ok) {
              const data = await response.json()
              setFormData((prev) => ({
                ...prev,
                address: data.address || `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
              }))
            }
          } catch (error) {
            console.error('Reverse geocoding failed:', error)
          }

          toast({
            title: "Location captured",
            description: "Your current location has been added to the report.",
          })
        },
        (error) => {
          toast({
            title: "Location error",
            description: "Unable to get your location. Please enter it manually or search for a specific place.",
            variant: "destructive",
          })
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      )
    } else {
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support location services. Please search manually.",
        variant: "destructive",
      })
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    
    // Validate file types and sizes
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/') || file.type === 'application/pdf'
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB limit
      
      if (!isValidType) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a valid image or PDF file.`,
          variant: "destructive",
        })
        return false
      }
      
      if (!isValidSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 10MB.`,
          variant: "destructive",
        })
        return false
      }
      
      return true
    })

    setSelectedFiles(prev => [...prev, ...validFiles])
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const uploadFiles = async (): Promise<string[]> => {
    if (selectedFiles.length === 0) return []

    setIsUploadingFiles(true)
    try {
      const formData = new FormData()
      selectedFiles.forEach(file => {
        formData.append('files', file)
      })

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      const urls = data.files.map((file: any) => file.url)
      setUploadedImages(urls)
      
      toast({
        title: "Files uploaded",
        description: `${selectedFiles.length} file(s) uploaded successfully.`,
      })

      return urls
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Upload failed",
        description: "Failed to upload files. You can still submit the report without images.",
        variant: "destructive",
      })
      return []
    } finally {
      setIsUploadingFiles(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Upload files first if any are selected
      let imageUrls: string[] = []
      if (selectedFiles.length > 0) {
        imageUrls = await uploadFiles()
      }

      // Use the enhanced submission endpoint
      const response = await fetch('/api/reports/submit-enhanced', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          type: formData.type,
          address: formData.address,
          latitude: formData.latitude,
          longitude: formData.longitude,
          images: [...uploadedImages, ...imageUrls]
        }),
      })

      if (response.ok) {
        const data = await response.json()
        
        let successMessage = "Your report has been submitted successfully!"
        
        if (data.report.lawAnalysis?.isHighPriority) {
          successMessage += " This case has been marked as high priority and will be reviewed urgently."
        }
        
        if (data.publicConsultationCreated) {
          successMessage += " A public consultation has been created for community input."
        }

        toast({
          title: "Report submitted",
          description: successMessage,
        })

        onOpenChange(false)
        
        // Reset form
        setFormData({
          title: "",
          description: "",
          type: "",
          address: "",
          latitude: "",
          longitude: "",
        })
        setSelectedFiles([])
        setUploadedImages([])
        setSearchResults([])
        setSearchQuery("")
        setLocationType("search")
        
        // Call the success callback to refresh data
        if (onSuccess) {
          onSuccess()
        }
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit report')
      }
    } catch (error) {
      console.error('Submit error:', error)
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "There was an error submitting your report. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-black">Report an Issue</DialogTitle>
          <DialogDescription className="text-gray-600">
            Help improve Kilimani by reporting infrastructure problems, water shortages, flooding, or other community
            issues.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-black">Issue Title</Label>
              <Input
                id="title"
                placeholder="Brief description of the issue"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                required
                className="bg-white border-gray-300 text-black"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type" className="text-black">Issue Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
                required
              >
                <SelectTrigger className="bg-white border-gray-300 text-black">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  {reportTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} className="text-black hover:bg-gray-100">
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-black">Detailed Description</Label>
            <Textarea
              id="description"
              placeholder="Provide more details about the issue..."
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              rows={3}
              required
              className="bg-white border-gray-300 text-black"
            />
          </div>

          {/* Location Selection Method */}
          <div className="space-y-3">
            <Label className="text-black font-medium">How would you like to specify the location?</Label>
            <RadioGroup 
              value={locationType} 
              onValueChange={(value: "search" | "current") => setLocationType(value)}
              className="grid grid-cols-1 gap-3"
            >
              <div className={`flex items-center space-x-3 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                locationType === "search" 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}>
                <RadioGroupItem value="search" id="search" className="text-blue-600" />
                <div className="flex-1">
                  <Label htmlFor="search" className="text-black cursor-pointer font-medium flex items-center gap-2">
                    <Search className="h-4 w-4 text-gray-600" />
                    Search for a specific place
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Find exact locations like buildings, landmarks, or streets in Kilimani
                  </p>
                </div>
              </div>
              <div className={`flex items-center space-x-3 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                locationType === "current" 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}>
                <RadioGroupItem value="current" id="current" className="text-blue-600" />
                <div className="flex-1">
                  <Label htmlFor="current" className="text-black cursor-pointer font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    Use my current location
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Automatically detect where you are right now using GPS
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Location Input based on selection */}
          {locationType === "search" ? (
            <div className="space-y-3">
              <div className="space-y-2">
                <Label className="text-black">Search Location in Kilimani</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Try: Yaya Centre, Denis Pritt Road, Kilimani Primary..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        searchLocation()
                      }
                    }}
                    className="bg-white border-gray-300 text-black"
                  />
                  <Button 
                    type="button" 
                    onClick={searchLocation}
                    disabled={isSearching || !searchQuery.trim()}
                    className="bg-blue-600 hover:bg-blue-700 flex-shrink-0"
                  >
                    {isSearching ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  💡 Try searching for landmarks, buildings, or streets in Kilimani area
                </p>
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="space-y-2 max-h-40 overflow-y-auto border rounded-lg p-3 bg-gray-50">
                  <Label className="text-sm font-medium text-black">Select a location:</Label>
                  <div className="space-y-2">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        onClick={() => selectLocation(result)}
                        className="p-3 bg-white border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors shadow-sm"
                      >
                        <div className="font-medium text-black text-sm flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          {result.name}
                        </div>
                        <div className="text-xs text-gray-600 mt-1 ml-6">{result.address}</div>
                        <div className="text-xs text-blue-600 mt-1 ml-6">
                          {result.latitude.toFixed(4)}, {result.longitude.toFixed(4)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Manual Address Input */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-black">Address/Location</Label>
                <Input
                  id="address"
                  placeholder="Street address or landmark"
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  className="bg-white border-gray-300 text-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="latitude" className="text-black">Latitude</Label>
                  <Input
                    id="latitude"
                    placeholder="Latitude"
                    value={formData.latitude}
                    onChange={(e) => setFormData((prev) => ({ ...prev, latitude: e.target.value }))}
                    className="bg-white border-gray-300 text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude" className="text-black">Longitude</Label>
                  <Input
                    id="longitude"
                    placeholder="Longitude"
                    value={formData.longitude}
                    onChange={(e) => setFormData((prev) => ({ ...prev, longitude: e.target.value }))}
                    className="bg-white border-gray-300 text-black"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-black font-medium flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      Use Current Location
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Click the button to automatically detect your location using GPS
                    </p>
                  </div>
                  <Button 
                    type="button" 
                    onClick={getCurrentLocation}
                    className="bg-blue-600 hover:bg-blue-700 text-white ml-4"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Location
                  </Button>
                </div>
              </div>

              {(formData.latitude && formData.longitude) && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800">
                        ✓ Location Successfully Captured
                      </p>
                      <p className="text-xs text-green-700 mt-1">
                        Coordinates: {parseFloat(formData.latitude).toFixed(4)}, {parseFloat(formData.longitude).toFixed(4)}
                      </p>
                      {formData.address && (
                        <p className="text-xs text-green-600 mt-1">{formData.address}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* File Upload Section */}
          <div className="space-y-3">
            <Label className="text-black font-medium">Photos/Documents (Optional)</Label>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Camera className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium mb-1">
                  Upload photos of the issue or relevant documents
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Supported: Images (JPG, PNG, GIF) and PDF files • Max 10MB each
                </p>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploadingFiles}
                  className="bg-white border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
                >
                  {isUploadingFiles ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Upload className="h-4 w-4 mr-2" />
                  )}
                  {isUploadingFiles ? "Uploading..." : "Choose Files"}
                </Button>
              </div>
            </div>

            {/* Selected Files Display */}
            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm text-black font-medium">Selected files ({selectedFiles.length}):</Label>
                <div className="space-y-2 max-h-32 overflow-y-auto bg-gray-50 rounded-lg p-3">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white rounded border shadow-sm">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                          {file.type.startsWith('image/') ? (
                            <Camera className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Upload className="h-4 w-4 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-black truncate">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)}MB • {file.type.split('/')[1].toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50 h-8 w-8 p-0 flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Uploaded Images Display */}
            {uploadedImages.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Camera className="h-3 w-3 text-white" />
                  </div>
                  <Label className="text-sm font-medium text-green-700">
                    ✓ Successfully uploaded ({uploadedImages.length} files)
                  </Label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {uploadedImages.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Uploaded ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg border-2 border-green-200 shadow-sm"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Camera className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="bg-white">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)} 
              className="bg-white border-gray-300 text-black hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting || isUploadingFiles} 
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Report"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}