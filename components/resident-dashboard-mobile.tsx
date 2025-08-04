"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plus, AlertTriangle, Droplets, Construction, Trash2, Users, BarChart3, MessageSquare, Activity, Smartphone } from "lucide-react"
import { signOut } from "next-auth/react"
import { KilimaniMap } from "./kilimani-map"
import { ReportIssueDialog } from "./report-issue-dialog"

interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string
}

interface ResidentDashboardProps {
  user: User
}

export function ResidentDashboard({ user }: ResidentDashboardProps) {
  const [showReportDialog, setShowReportDialog] = useState(false)

  const recentReports = [
    {
      id: 1,
      title: "Water shortage on Argwings Kodhek Road",
      type: "WATER_SHORTAGE",
      status: "IN_PROGRESS",
      priority: "HIGH",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Pothole on Kilimani Road",
      type: "INFRASTRUCTURE",
      status: "PENDING",
      priority: "MEDIUM",
      createdAt: "2024-01-14",
    },
    {
      id: 3,
      title: "Flooding near Yaya Centre",
      type: "FLOODING",
      status: "RESOLVED",
      priority: "CRITICAL",
      createdAt: "2024-01-12",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-500 text-white"
      case "IN_PROGRESS":
        return "bg-blue-500 text-white"
      case "RESOLVED":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "CRITICAL":
        return "bg-red-600 text-white"
      case "HIGH":
        return "bg-red-500 text-white"
      case "MEDIUM":
        return "bg-yellow-500 text-white"
      case "LOW":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "WATER_SHORTAGE":
        return <Droplets className="h-4 w-4" />
      case "INFRASTRUCTURE":
        return <Construction className="h-4 w-4" />
      case "FLOODING":
        return <AlertTriangle className="h-4 w-4" />
      case "WASTE_MANAGEMENT":
        return <Trash2 className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 p-2 sm:p-4 pb-20 sm:pb-4">
      {/* Mobile-First Header */}
      <header className="bg-white/90 backdrop-blur-xl border-0 shadow-xl sticky top-2 z-50 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-75"></div>
              <div className="relative w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Kilimani Urban Intelligence
              </h1>
              <p className="text-sm text-gray-500 font-medium">Resident Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-sm text-gray-600 font-medium">Welcome, {user.name}</span>
            <Button 
              variant="outline" 
              onClick={() => signOut()} 
              className="hover:bg-red-50 hover:border-red-200 hover:text-red-600 rounded-xl"
              size="sm"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Mobile-Optimized Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={() => setShowReportDialog(true)} 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-12"
                  size="lg"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Report Issue
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 text-purple-700 hover:from-purple-100 hover:to-indigo-100 hover:border-purple-300 rounded-xl h-12" 
                  size="lg"
                >
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Analytics
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 text-orange-700 hover:from-orange-100 hover:to-red-100 hover:border-orange-300 rounded-xl h-12" 
                  size="lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Public Consultations
                </Button>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card className="mt-4 bg-white/90 backdrop-blur-xl border-0 shadow-xl rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-900">Your Recent Reports</CardTitle>
                <CardDescription className="text-gray-600">Track your submitted issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div key={report.id} className="border rounded-xl p-3 bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-2">
                        <div className="mt-1">
                          {getTypeIcon(report.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{report.title}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge className={`${getStatusColor(report.status)} text-xs`}>
                              {report.status.replace("_", " ")}
                            </Badge>
                            <Badge className={`${getPriorityColor(report.priority)} text-xs`}>
                              {report.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{report.createdAt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Mobile-Optimized */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="map" className="space-y-4">
              <div className="bg-white/90 backdrop-blur-xl border-0 shadow-xl rounded-2xl p-2">
                <TabsList className="grid w-full grid-cols-4 h-auto gap-1 bg-transparent">
                  <TabsTrigger 
                    value="map" 
                    className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-medium">Interactive Map</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="reports" 
                    className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Activity className="w-5 h-5" />
                    <span className="text-xs font-medium">All Reports</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="analytics" 
                    className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-xs font-medium">Analytics</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="consultations" 
                    className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-orange-700 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-xs font-medium">Consultations</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="map">
                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-gray-900">Kilimani Ward Map</CardTitle>
                    <CardDescription className="text-gray-600">
                      Interactive map showing reports, flood risks, and development areas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-64 sm:h-80 lg:h-96 w-full">
                      <KilimaniMap />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl rounded-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-gray-900">Community Reports</CardTitle>
                    <CardDescription className="text-gray-600">View all reports from the Kilimani community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8">
                        <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600 text-lg">Reports feed will be implemented here</p>
                        <p className="text-gray-500 text-sm mt-2">Community reports and updates coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Analytics Tab with Mobile-First Design */}
              <TabsContent value="analytics">
                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl overflow-hidden rounded-2xl">
                  <CardHeader className="pb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <CardTitle className="text-white flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Community Analytics</span>
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                      Real-time insights and trends from community data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    {/* Mobile-Optimized Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 bg-blue-600 rounded-xl">
                            <AlertTriangle className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-xs font-medium text-blue-600 bg-blue-200 px-2 py-1 rounded-full">
                            +12% this month
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">247</h3>
                        <p className="text-sm text-blue-700">Total Reports</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 bg-green-600 rounded-xl">
                            <Construction className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-xs font-medium text-green-600 bg-green-200 px-2 py-1 rounded-full">
                            +23% resolved
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-green-900">158</h3>
                        <p className="text-sm text-green-700">Issues Resolved</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 border border-amber-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 bg-amber-600 rounded-xl">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-xs font-medium text-amber-600 bg-amber-200 px-2 py-1 rounded-full">
                            +8% growth
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-amber-900">1,234</h3>
                        <p className="text-sm text-amber-700">Active Users</p>
                      </div>
                    </div>

                    {/* Mobile-Optimized Issue Distribution */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                        Issue Distribution
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-blue-500 rounded-2xl flex items-center justify-center mb-2">
                            <Droplets className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Water Issues</p>
                          <p className="text-lg font-bold text-blue-600">34%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-amber-500 rounded-2xl flex items-center justify-center mb-2">
                            <Construction className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Infrastructure</p>
                          <p className="text-lg font-bold text-amber-600">28%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-red-500 rounded-2xl flex items-center justify-center mb-2">
                            <AlertTriangle className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Flooding</p>
                          <p className="text-lg font-bold text-red-600">22%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-purple-500 rounded-2xl flex items-center justify-center mb-2">
                            <Trash2 className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Waste</p>
                          <p className="text-lg font-bold text-purple-600">16%</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Consultations Tab */}
              <TabsContent value="consultations">
                <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl overflow-hidden rounded-2xl">
                  <CardHeader className="pb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Public Consultations</span>
                    </CardTitle>
                    <CardDescription className="text-orange-100">
                      Participate in community planning and decision making
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center py-8">
                      <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-8">
                        <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                        <p className="text-gray-600 text-lg">Public consultations will be implemented here</p>
                        <p className="text-gray-500 text-sm mt-2">Community engagement and planning sessions coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <ReportIssueDialog open={showReportDialog} onOpenChange={setShowReportDialog} />
    </div>
  )
}
