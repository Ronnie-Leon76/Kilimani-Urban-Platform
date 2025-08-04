"use client"

import type React from "react"

import { useState } from "react"
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
import { MapPin, Camera, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ReportIssueDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ReportIssueDialog({ open, onOpenChange }: ReportIssueDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    address: "",
    latitude: "",
    longitude: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const reportTypes = [
    { value: "INFRASTRUCTURE", label: "Infrastructure Issues" },
    { value: "WATER_SHORTAGE", label: "Water Shortage" },
    { value: "FLOODING", label: "Flooding" },
    { value: "WASTE_MANAGEMENT", label: "Waste Management" },
    { value: "ILLEGAL_DEVELOPMENT", label: "Illegal Development" },
    { value: "OTHER", label: "Other" },
  ]

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          }))
          toast({
            title: "Location captured",
            description: "Your current location has been added to the report.",
          })
        },
        (error) => {
          toast({
            title: "Location error",
            description: "Unable to get your location. Please enter it manually.",
            variant: "destructive",
          })
        },
      )
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      toast({
        title: "Report submitted",
        description: "Your report has been submitted successfully. We'll review it shortly.",
      })

      onOpenChange(false)
      setFormData({
        title: "",
        description: "",
        type: "",
        address: "",
        latitude: "",
        longitude: "",
      })
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your report. Please try again.",
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
              rows={2}
              required
              className="bg-white border-gray-300 text-black"
            />
          </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <div className="flex items-end">
              <Button type="button" variant="outline" onClick={getCurrentLocation} className="w-full bg-white border-gray-300 text-black hover:bg-gray-50">
                <MapPin className="h-4 w-4 mr-2" />
                Get Location
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-black">Photos (Optional)</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-white">
              <Camera className="h-6 w-6 mx-auto text-gray-400 mb-1" />
              <p className="text-xs text-gray-600 mb-2">Upload photos of the issue</p>
              <Button type="button" variant="outline" size="sm" className="bg-white border-gray-300 text-black hover:bg-gray-50">
                <Upload className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
            </div>
          </div>

          <DialogFooter className="bg-white">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="bg-white border-gray-300 text-black hover:bg-gray-50">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-700 text-white">
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}