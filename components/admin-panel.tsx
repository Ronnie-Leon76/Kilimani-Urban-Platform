"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Users, 
  FileText, 
  Settings, 
  BarChart3, 
  Shield, 
  MapPin,
  MessageSquare,
  AlertTriangle,
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Activity,
  Database,
  Smartphone
} from "lucide-react"
import { signOut } from "next-auth/react"

interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string
}

interface AdminPanelProps {
  user: User
}

export function AdminPanel({ user }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for demonstration
  const stats = {
    totalUsers: 1247,
    totalReports: 342,
    pendingReports: 23,
    resolvedReports: 289,
    activeConsultations: 5,
    systemUptime: "99.9%",
    mobileUsers: 987,
    avgResponseTime: "2.3 days"
  }

  const recentReports = [
    { 
      id: 1, 
      title: "Water shortage on Argwings Kodhek Road", 
      status: "pending", 
      priority: "high", 
      date: "2024-01-15", 
      reporter: "John Doe",
      location: "Argwings Kodhek Road"
    },
    { 
      id: 2, 
      title: "Pothole on Kilimani Road", 
      status: "in_progress", 
      priority: "medium", 
      date: "2024-01-14", 
      reporter: "Jane Smith",
      location: "Kilimani Road"
    },
    { 
      id: 3, 
      title: "Street light not working", 
      status: "resolved", 
      priority: "low", 
      date: "2024-01-13", 
      reporter: "Mike Johnson",
      location: "Yaya Centre"
    }
  ]

  const systemUsers = [
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      role: "RESIDENT", 
      status: "active", 
      joinDate: "2024-01-10",
      reportsCount: 5,
      lastActive: "2 hours ago"
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      email: "jane@example.com", 
      role: "GOVERNMENT_OFFICIAL", 
      status: "active", 
      joinDate: "2024-01-08",
      reportsCount: 12,
      lastActive: "1 day ago"
    },
    { 
      id: 3, 
      name: "Mike Johnson", 
      email: "mike@example.com", 
      role: "RESIDENT", 
      status: "inactive", 
      joinDate: "2024-01-05",
      reportsCount: 2,
      lastActive: "1 week ago"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500 text-white"
      case "in_progress": return "bg-blue-500 text-white"
      case "resolved": return "bg-green-500 text-white"
      case "active": return "bg-green-500 text-white"
      case "inactive": return "bg-gray-500 text-white"
      default: return "bg-gray-500 text-white"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500 text-white"
      case "medium": return "bg-yellow-500 text-white"
      case "low": return "bg-green-500 text-white"
      default: return "bg-gray-500 text-white"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "ADMIN": return "bg-purple-500 text-white"
      case "GOVERNMENT_OFFICIAL": return "bg-blue-500 text-white"
      case "RESIDENT": return "bg-green-500 text-white"
      default: return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-2 sm:p-4 pb-20 sm:pb-4">
      {/* Mobile-First Header */}
      <div className="bg-white/90 backdrop-blur-xl border-0 shadow-xl rounded-2xl p-4 mb-4 sticky top-2 z-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Admin Panel
              </h1>
              <p className="text-sm text-gray-600">Kilimani Urban Intelligence</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Welcome, {user.name}</span>
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              ADMIN
            </Badge>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => signOut()}
              className="hidden sm:flex"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile-Optimized Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="bg-white/90 backdrop-blur-xl border-0 shadow-xl rounded-2xl p-2 overflow-x-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-auto gap-1 bg-transparent">
            <TabsTrigger 
              value="overview" 
              className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs font-medium">Overview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              <span className="text-xs font-medium">Users</span>
            </TabsTrigger>
            <TabsTrigger 
              value="reports" 
              className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              <span className="text-xs font-medium">Reports</span>
            </TabsTrigger>
            <TabsTrigger 
              value="consultations" 
              className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-xs font-medium">Consultations</span>
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <Activity className="w-5 h-5" />
              <span className="text-xs font-medium">Analytics</span>
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="flex flex-col gap-1 py-3 px-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-500 data-[state=active]:to-gray-700 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <Settings className="w-5 h-5" />
              <span className="text-xs font-medium">Settings</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          {/* Stats Grid - Mobile First */}
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-3">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-blue-700">{stats.totalUsers}</p>
                    <p className="text-xs text-blue-600">Total Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <FileText className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-green-700">{stats.totalReports}</p>
                    <p className="text-xs text-green-600">Total Reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <Clock className="w-8 h-8 text-yellow-600" />
                  <div>
                    <p className="text-2xl font-bold text-yellow-700">{stats.pendingReports}</p>
                    <p className="text-xs text-yellow-600">Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="text-2xl font-bold text-purple-700">{stats.resolvedReports}</p>
                    <p className="text-xs text-purple-600">Resolved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <MessageSquare className="w-8 h-8 text-pink-600" />
                  <div>
                    <p className="text-2xl font-bold text-pink-700">{stats.activeConsultations}</p>
                    <p className="text-xs text-pink-600">Consultations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                  <div>
                    <p className="text-2xl font-bold text-teal-700">{stats.systemUptime}</p>
                    <p className="text-xs text-teal-600">Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                  <div>
                    <p className="text-2xl font-bold text-indigo-700">{stats.mobileUsers}</p>
                    <p className="text-xs text-indigo-600">Mobile Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <Activity className="w-8 h-8 text-cyan-600" />
                  <div>
                    <p className="text-lg font-bold text-cyan-700">{stats.avgResponseTime}</p>
                    <p className="text-xs text-cyan-600">Avg Response</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Recent Reports Requiring Attention
              </CardTitle>
              <CardDescription>Latest community reports that need admin review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-sm sm:text-base">{report.title}</p>
                    <p className="text-sm text-gray-600">{report.reporter} • {report.location} • {report.date}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <Badge className={`${getPriorityColor(report.priority)} text-xs`}>
                      {report.priority}
                    </Badge>
                    <Badge className={`${getStatusColor(report.status)} text-xs`}>
                      {report.status.replace("_", " ")}
                    </Badge>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Management Tab */}
        <TabsContent value="users" className="space-y-4">
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    User Management
                  </CardTitle>
                  <CardDescription>Manage platform users and permissions</CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    placeholder="Search users..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/70 backdrop-blur-sm"
                  />
                </div>
                <Button variant="outline" size="sm" className="bg-white/70 backdrop-blur-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Users List */}
              <div className="space-y-3">
                {systemUsers.map((systemUser) => (
                  <div key={systemUser.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                        {systemUser.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{systemUser.name}</p>
                        <p className="text-sm text-gray-600 truncate">{systemUser.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-xs text-gray-500">{systemUser.reportsCount} reports</p>
                          <span className="text-gray-300">•</span>
                          <p className="text-xs text-gray-500">Last active: {systemUser.lastActive}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                      <Badge className={`${getRoleColor(systemUser.role)} text-xs`}>
                        {systemUser.role}
                      </Badge>
                      <Badge className={`${getStatusColor(systemUser.status)} text-xs`}>
                        {systemUser.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Management Tab */}
        <TabsContent value="reports" className="space-y-4">
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Reports Management
              </CardTitle>
              <CardDescription>Monitor and manage community reports</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Quick Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-md">
                  <Clock className="w-6 h-6 text-yellow-600" />
                  <span className="text-xs font-medium">Pending ({stats.pendingReports})</span>
                </Button>
                <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-md">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <span className="text-xs font-medium">High Priority</span>
                </Button>
                <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-md">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-xs font-medium">Resolved</span>
                </Button>
                <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-md">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="text-xs font-medium">View Map</span>
                </Button>
              </div>

              {/* Reports List */}
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{report.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">By {report.reporter} • {report.location}</p>
                        <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                      </div>
                      <div className="flex gap-1 ml-3">
                        <Button variant="ghost" size="sm" className="hover:bg-blue-100">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-green-100">
                          <Edit className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-red-100">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge className={`${getPriorityColor(report.priority)} text-xs`}>
                          {report.priority.toUpperCase()}
                        </Badge>
                        <Badge className={`${getStatusColor(report.status)} text-xs`}>
                          {report.status.replace("_", " ").toUpperCase()}
                        </Badge>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                        Take Action
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tabs */}
        <TabsContent value="consultations">
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                Public Consultations
              </CardTitle>
              <CardDescription>Manage community consultations and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-10 h-10 text-purple-600" />
                </div>
                <p className="text-gray-600 text-lg">Consultation management interface</p>
                <p className="text-gray-500 text-sm mt-2">Coming soon - Advanced community engagement tools</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-600" />
                Analytics & Insights
              </CardTitle>
              <CardDescription>Platform performance and usage analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-teal-600" />
                </div>
                <p className="text-gray-600 text-lg">Advanced analytics dashboard</p>
                <p className="text-gray-500 text-sm mt-2">Coming soon - Real-time insights and reporting</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-gray-600" />
                System Settings
              </CardTitle>
              <CardDescription>Configure platform settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-10 h-10 text-gray-600" />
                </div>
                <p className="text-gray-600 text-lg">System settings interface</p>
                <p className="text-gray-500 text-sm mt-2">Coming soon - Comprehensive platform configuration</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Mobile Bottom Navigation for Sign Out */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 p-4 sm:hidden">
        <Button 
          variant="outline" 
          onClick={() => signOut()}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 hover:from-red-600 hover:to-pink-600"
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}
