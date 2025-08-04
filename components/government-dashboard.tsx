"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, AlertTriangle, Droplets, Construction, Trash2, TrendingUp, Users, BarChart3 } from "lucide-react"
import { signOut } from "next-auth/react"

interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string
}

interface GovernmentDashboardProps {
  user: User
}

export function GovernmentDashboard({ user }: GovernmentDashboardProps) {
  const stats = [
    { title: "Total Reports", value: "247", change: "+12%", icon: AlertTriangle, color: "text-blue-600" },
    { title: "Pending Issues", value: "89", change: "-5%", icon: Construction, color: "text-yellow-600" },
    { title: "Resolved This Month", value: "158", change: "+23%", icon: TrendingUp, color: "text-green-600" },
    { title: "Active Users", value: "1,234", change: "+8%", icon: Users, color: "text-purple-600" },
  ]

  const recentReports = [
    {
      id: 1,
      title: "Water shortage on Argwings Kodhek Road",
      type: "WATER_SHORTAGE",
      status: "PENDING",
      priority: "HIGH",
      reporter: "John Doe",
      createdAt: "2024-01-15",
      location: "Argwings Kodhek Road",
    },
    {
      id: 2,
      title: "Pothole on Kilimani Road",
      type: "INFRASTRUCTURE",
      status: "IN_PROGRESS",
      priority: "MEDIUM",
      reporter: "Jane Smith",
      createdAt: "2024-01-14",
      location: "Kilimani Road",
    },
    {
      id: 3,
      title: "Illegal construction near Yaya Centre",
      type: "ILLEGAL_DEVELOPMENT",
      status: "PENDING",
      priority: "CRITICAL",
      reporter: "Mike Johnson",
      createdAt: "2024-01-13",
      location: "Near Yaya Centre",
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
      case "ILLEGAL_DEVELOPMENT":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 safe-area-inset">
      {/* Mobile-First Header */}
      <div className="bg-white/90 backdrop-blur-mobile shadow-xl sticky top-0 z-50 safe-area-top">
        <div className="p-4 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Kilimani Urban Intelligence
                </h1>
                <p className="text-sm text-gray-600">Government Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                {user.role?.replace("_", " ")}
              </Badge>
              <span className="text-sm text-gray-600 hidden sm:block">Welcome, {user.name}</span>
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
        {/* Mobile-First Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="card-mobile border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600 truncate">{stat.title}</p>
                    <p className="text-xs">
                      <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
                        {stat.change}
                      </span>{" "}
                      from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile-Optimized Tabs */}
        <Tabs defaultValue="reports" className="space-y-6">
          <div className="card-mobile p-2">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto gap-1 bg-transparent">
              <TabsTrigger 
                value="reports" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
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
                value="satellite" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-medium">Satellite</span>
              </TabsTrigger>
              <TabsTrigger 
                value="planning" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Construction className="w-4 h-4" />
                <span className="text-xs font-medium">Planning</span>
              </TabsTrigger>
              <TabsTrigger 
                value="consultations" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Users className="w-4 h-4" />
                <span className="text-xs font-medium">Community</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reports">
            <Card className="card-mobile border-0">
              <CardHeader>
                <CardTitle>Recent Community Reports</CardTitle>
                <CardDescription>Latest issues reported by Kilimani residents</CardDescription>
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
                          <h4 className="font-medium text-gray-900">{report.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Reported by {report.reporter} • {report.location}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={getStatusColor(report.status)}>
                              {report.status.replace("_", " ")}
                            </Badge>
                            <Badge className={getPriorityColor(report.priority)}>
                              {report.priority}
                            </Badge>
                            <span className="text-xs text-gray-500">{report.createdAt}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline" className="mobile-button">
                            View Details
                          </Button>
                          <Button size="sm" className="mobile-button bg-green-600 hover:bg-green-700 text-white">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <BarChart3 className="h-5 w-5" />
                    <span>Report Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-900">Weekly Reports</span>
                        <span className="text-lg font-bold text-blue-600">+23%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-900">Resolution Rate</span>
                        <span className="text-lg font-bold text-green-600">87%</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-orange-900">Avg Response Time</span>
                        <span className="text-lg font-bold text-orange-600">2.3 days</span>
                      </div>
                      <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <CardTitle className="text-white">Issue Distribution</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-blue-50 rounded-lg p-4">
                      <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-blue-600">34%</p>
                      <p className="text-sm text-gray-600">Water</p>
                    </div>
                    <div className="text-center bg-amber-50 rounded-lg p-4">
                      <Construction className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-amber-600">28%</p>
                      <p className="text-sm text-gray-600">Infrastructure</p>
                    </div>
                    <div className="text-center bg-red-50 rounded-lg p-4">
                      <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-red-600">22%</p>
                      <p className="text-sm text-gray-600">Flooding</p>
                    </div>
                    <div className="text-center bg-purple-50 rounded-lg p-4">
                      <Trash2 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-purple-600">16%</p>
                      <p className="text-sm text-gray-600">Waste</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="satellite">
            <Card>
              <CardHeader>
                <CardTitle>Satellite Analysis</CardTitle>
                <CardDescription>AI-powered analysis of satellite imagery for urban monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Satellite analysis dashboard will be implemented here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="planning">
            <Card>
              <CardHeader>
                <CardTitle>Development Planning</CardTitle>
                <CardDescription>Local Physical Development Plan and approved projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">Planning dashboard will be implemented here</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultations">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="text-white">Public Consultations</CardTitle>
                <CardDescription className="text-orange-100">
                  Manage community consultations and gather feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Active Consultations */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Active Consultations</h4>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900">Kilimani Road Expansion</h5>
                            <p className="text-sm text-gray-600 mt-1">Community consultation on proposed road widening</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm">
                              <span className="text-green-600">📅 Ends Jan 30, 2024</span>
                              <span className="text-blue-600">👥 234 participants</span>
                              <span className="text-purple-600">💬 67 comments</span>
                            </div>
                          </div>
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                            Manage
                          </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="bg-green-100 text-green-800 text-center py-1 rounded text-sm">
                            67% Support
                          </div>
                          <div className="bg-red-100 text-red-800 text-center py-1 rounded text-sm">
                            18% Oppose
                          </div>
                          <div className="bg-gray-100 text-gray-800 text-center py-1 rounded text-sm">
                            15% Neutral
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900">Community Park Development</h5>
                            <p className="text-sm text-gray-600 mt-1">Planning for new community park near Yaya Centre</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm">
                              <span className="text-green-600">📅 Ends Feb 15, 2024</span>
                              <span className="text-blue-600">👥 189 participants</span>
                              <span className="text-purple-600">💬 43 comments</span>
                            </div>
                          </div>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Stats */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Consultation Statistics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">12</div>
                        <div className="text-sm text-gray-600">Total Consultations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">2</div>
                        <div className="text-sm text-gray-600">Currently Active</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">1,245</div>
                        <div className="text-sm text-gray-600">Total Participants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">89%</div>
                        <div className="text-sm text-gray-600">Engagement Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex space-x-4">
                    <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                      + Create New Consultation
                    </Button>
                    <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                      View All Consultations
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}