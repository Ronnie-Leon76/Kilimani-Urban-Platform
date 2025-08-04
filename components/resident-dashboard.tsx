"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Plus, 
  AlertTriangle, 
  Droplets, 
  Construction, 
  Trash2, 
  Users, 
  BarChart3, 
  MessageSquare,
  Eye,
  CheckCircle,
  Clock,
  User,
  Bell,
  TrendingUp
} from "lucide-react"
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
        return "bg-yellow-100 text-yellow-800"
      case "IN_PROGRESS":
        return "bg-blue-100 text-blue-800"
      case "RESOLVED":
        return "bg-green-100 text-green-800"
      case "REJECTED":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "LOW":
        return "bg-gray-100 text-gray-800"
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-800"
      case "HIGH":
        return "bg-orange-100 text-orange-800"
      case "CRITICAL":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 safe-area-inset">
      {/* Mobile-First Header */}
      <div className="bg-white/90 backdrop-blur-mobile shadow-xl sticky top-0 z-50 safe-area-top">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Kilimani Urban Intelligence
                </h1>
                <p className="text-sm text-gray-600">Resident Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="mobile-button p-2">
                <Bell className="w-5 h-5 text-gray-600" />
              </Button>
              <span className="hidden sm:block text-sm text-gray-600">Welcome, {user.name}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => signOut()}
                className="mobile-button"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 safe-area-bottom">
        {/* Mobile-First Quick Actions & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Quick Actions Sidebar */}
          <Card className="card-mobile border-0 lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="w-5 h-5 text-green-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                size="lg"
                onClick={() => setShowReportDialog(true)}
                className="w-full mobile-button bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Report Issue
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full mobile-button bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 text-purple-700 hover:from-purple-100 hover:to-indigo-100"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Analytics
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full mobile-button bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 text-orange-700 hover:from-orange-100 hover:to-red-100"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Public Consultations
              </Button>
            </CardContent>
          </Card>

          {/* Mobile-Optimized Recent Reports */}
          <Card className="card-mobile border-0 lg:col-span-3">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Your Recent Reports</CardTitle>
              <CardDescription>Track your submitted issues and their progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="mobile-card bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {getTypeIcon(report.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{report.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{report.createdAt}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className={getStatusColor(report.status)}>
                            {report.status.replace("_", " ")}
                          </Badge>
                          <Badge className={getPriorityColor(report.priority)}>
                            {report.priority}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="mobile-button">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile-Optimized Main Content Tabs */}
        <Tabs defaultValue="map" className="space-y-6">
          <div className="card-mobile p-2">
            <TabsList className="grid w-full grid-cols-4 h-auto gap-1 bg-transparent">
              <TabsTrigger 
                value="map" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-medium">Map</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-medium">Reports</span>
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs font-medium">Analytics</span>
              </TabsTrigger>
              <TabsTrigger 
                value="consultations" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-medium">Community</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Map Tab */}
          <TabsContent value="map">
            <Card className="card-mobile border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Kilimani Ward Map</CardTitle>
                <CardDescription>Interactive map showing reports, flood risks, and development areas</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 sm:h-80 lg:h-96 rounded-b-2xl overflow-hidden">
                  <KilimaniMap />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Reports Tab */}
          <TabsContent value="reports">
            <Card className="card-mobile border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Community Reports</CardTitle>
                <CardDescription>View all reports from the Kilimani community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div key={report.id} className="mobile-card bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          {getTypeIcon(report.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900">{report.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{report.createdAt}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={getPriorityColor(report.priority)}>
                              {report.priority}
                            </Badge>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status.replace("_", " ")}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="mobile-button">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

              <TabsContent value="analytics">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                  <CardHeader className="pb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <CardTitle className="text-white flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Community Analytics</span>
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                      Real-time insights and trends from community data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 bg-blue-600 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-xs font-medium text-blue-600 bg-blue-200 px-2 py-1 rounded-full">
                            +12% this month
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">247</h3>
                        <p className="text-sm text-blue-700">Total Reports</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 bg-green-600 rounded-lg">
                            <Construction className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-xs font-medium text-green-600 bg-green-200 px-2 py-1 rounded-full">
                            +23% resolved
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-green-900">158</h3>
                        <p className="text-sm text-green-700">Issues Resolved</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 bg-amber-600 rounded-lg">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-xs font-medium text-amber-600 bg-amber-200 px-2 py-1 rounded-full">
                            +8% growth
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-amber-900">1,234</h3>
                        <p className="text-sm text-amber-700">Active Users</p>
                      </div>
                    </div>

                    {/* Issue Types Distribution */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                        Issue Distribution
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-2">
                            <Droplets className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Water Issues</p>
                          <p className="text-lg font-bold text-blue-600">34%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-amber-500 rounded-full flex items-center justify-center mb-2">
                            <Construction className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Infrastructure</p>
                          <p className="text-lg font-bold text-amber-600">28%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-2">
                            <AlertTriangle className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Flooding</p>
                          <p className="text-lg font-bold text-red-600">22%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-2">
                            <Trash2 className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Waste</p>
                          <p className="text-lg font-bold text-purple-600">16%</p>
                        </div>
                      </div>
                    </div>

                    {/* Response Time Metrics */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-indigo-600" />
                        Response Performance
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Average Response Time</span>
                            <span className="text-lg font-bold text-indigo-600">2.3 days</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">25% faster than last month</p>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Resolution Rate</span>
                            <span className="text-lg font-bold text-green-600">87%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '87%'}}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">12% increase from last month</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="consultations">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                  <CardHeader className="pb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Public Consultations</span>
                    </CardTitle>
                    <CardDescription className="text-orange-100">
                      Participate in community planning and decision making
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Active Consultations */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2 text-orange-600" />
                        Active Consultations
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h5 className="text-lg font-semibold text-gray-900 mb-2">Kilimani Road Expansion Project</h5>
                              <p className="text-gray-600 text-sm mb-3">
                                Community consultation on the proposed road widening project along Kilimani Road. 
                                Your input is valuable for planning the construction timeline and minimizing disruption.
                              </p>
                              <div className="flex items-center space-x-4 text-sm">
                                <span className="flex items-center text-green-600">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                  Active until Jan 30, 2024
                                </span>
                                <span className="flex items-center text-blue-600">
                                  <Users className="h-4 w-4 mr-1" />
                                  234 participants
                                </span>
                              </div>
                            </div>
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                              Participate
                            </Button>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="text-center bg-white rounded-lg p-3">
                              <p className="text-2xl font-bold text-green-600">67%</p>
                              <p className="text-xs text-gray-600">Support</p>
                            </div>
                            <div className="text-center bg-white rounded-lg p-3">
                              <p className="text-2xl font-bold text-red-600">18%</p>
                              <p className="text-xs text-gray-600">Oppose</p>
                            </div>
                            <div className="text-center bg-white rounded-lg p-3">
                              <p className="text-2xl font-bold text-gray-600">15%</p>
                              <p className="text-xs text-gray-600">Neutral</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h5 className="text-lg font-semibold text-gray-900 mb-2">Community Park Development</h5>
                              <p className="text-gray-600 text-sm mb-3">
                                Planning for the new community park near Yaya Centre. Help us decide on facilities, 
                                recreational areas, and environmental conservation features.
                              </p>
                              <div className="flex items-center space-x-4 text-sm">
                                <span className="flex items-center text-green-600">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                  Active until Feb 15, 2024
                                </span>
                                <span className="flex items-center text-blue-600">
                                  <Users className="h-4 w-4 mr-1" />
                                  189 participants
                                </span>
                              </div>
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                              Join Discussion
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Playground</span>
                            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Green Spaces</span>
                            <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Sports Facilities</span>
                            <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Walking Paths</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Participation Stats */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-indigo-600" />
                        Your Participation
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
                            <MessageSquare className="h-10 w-10 text-white" />
                          </div>
                          <p className="text-2xl font-bold text-indigo-600">5</p>
                          <p className="text-sm text-gray-600">Consultations Joined</p>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-3">
                            <Users className="h-10 w-10 text-white" />
                          </div>
                          <p className="text-2xl font-bold text-green-600">12</p>
                          <p className="text-sm text-gray-600">Comments Posted</p>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-3">
                            <AlertTriangle className="h-10 w-10 text-white" />
                          </div>
                          <p className="text-2xl font-bold text-orange-600">8</p>
                          <p className="text-sm text-gray-600">Votes Cast</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
        </Tabs>
      </div>

      <ReportIssueDialog open={showReportDialog} onOpenChange={setShowReportDialog} />
    </div>
  )
}