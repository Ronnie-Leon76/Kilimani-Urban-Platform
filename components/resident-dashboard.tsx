"use client"

import { useState, useEffect } from "react"
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
  TrendingUp,
  Settings,
  Shield,
  Loader2
} from "lucide-react"
import { signOut } from "next-auth/react"
import { KilimaniMap } from "./kilimani-map"
import { ReportIssueDialog } from "./report-issue-dialog"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string
}

interface Report {
  id: string
  title: string
  type: string
  status: string
  priority: string
  location: string
  createdAt: string
  reporter: string
}

interface Consultation {
  id: string
  title: string
  description: string
  endDate: string
  participants: number
  comments: number
  userParticipated: boolean
  userVote: string | null
}

interface Analytics {
  totalReports: number
  resolvedReports: number
  activeUsers: number
  issueDistribution: {
    water: number
    infrastructure: number
    flooding: number
    waste: number
  }
}

interface Participation {
  consultationsJoined: number
  commentsPosted: number
  issuesReported: number
}

interface DashboardData {
  reports: Report[]
  analytics: Analytics
  consultations: Consultation[]
  participation: Participation
}

interface ResidentDashboardProps {
  user: User
}

export function ResidentDashboard({ user }: ResidentDashboardProps) {
  const [showReportDialog, setShowReportDialog] = useState(false)
  const [activeTab, setActiveTab] = useState("map")
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const isAdmin = user.role === "ADMIN"
  const isGovernment = user.role === "GOVERNMENT_OFFICIAL" || user.role === "ADMIN"

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/dashboard/resident')
        if (response.ok) {
          const data = await response.json()
          setDashboardData(data)
        } else {
          console.error('Failed to fetch dashboard data')
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  // Helper functions
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'water_shortage':
        return <Droplets className="h-5 w-5 text-white" />
      case 'infrastructure':
        return <Construction className="h-5 w-5 text-white" />
      case 'flooding':
        return <AlertTriangle className="h-5 w-5 text-white" />
      case 'waste_management':
        return <Trash2 className="h-5 w-5 text-white" />
      default:
        return <AlertTriangle className="h-5 w-5 text-white" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case 'in_progress':
        return "bg-blue-100 text-blue-800 border-blue-300"
      case 'resolved':
        return "bg-green-100 text-green-800 border-green-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'low':
        return "bg-green-100 text-green-800 border-green-300"
      case 'medium':
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case 'high':
        return "bg-orange-100 text-orange-800 border-orange-300"
      case 'critical':
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const handleReportSuccess = () => {
    setShowReportDialog(false)
    // Refresh dashboard data
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/dashboard/resident')
        if (response.ok) {
          const data = await response.json()
          setDashboardData(data)
        }
      } catch (error) {
        console.error('Error refreshing dashboard data:', error)
      }
    }
    fetchDashboardData()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 safe-area-inset relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-green-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Enhanced Mobile-First Header */}
      <div className="relative bg-white/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 safe-area-top animate-in slide-in-from-top duration-500">
        <div className="p-6 border-b border-gray-100/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700">
                  Kilimani Urban Intelligence
                </h1>
                <div className="flex items-center gap-2 animate-in slide-in-from-left duration-700 delay-100">
                  <p className="text-sm text-gray-600 font-medium">
                    {isAdmin ? "Admin Dashboard" : isGovernment ? "Government Dashboard" : "Resident Dashboard"}
                  </p>
                  <Badge className={`text-xs ${
                    isAdmin 
                      ? "bg-red-100 text-red-800" 
                      : isGovernment 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                  }`}>
                    {user.role?.replace("_", " ")}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="mobile-button p-2">
                <Bell className="w-5 h-5 text-gray-600" />
              </Button>
              {isAdmin && (
                <Button variant="outline" size="sm" className="mobile-button bg-gradient-to-r from-red-50 to-orange-50 border-red-200 text-red-700 hover:from-red-100 hover:to-orange-100"
                  onClick={() => router.push('/dashboard/admin')}
                >
                  <Shield className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Admin Panel</span>
                </Button>
              )}
              {isGovernment && (
                <Button variant="outline" size="sm" className="mobile-button bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-indigo-100"
                  onClick={() => router.push('/dashboard/government')}
                >
                  <Settings className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Gov Panel</span>
                </Button>
              )}
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
        {/* Admin Welcome Message */}
        {isAdmin && (
          <Card className="card-mobile border-0 bg-gradient-to-r from-red-50 to-orange-50 border-red-100">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">Welcome Admin!</h3>
                  <p className="text-sm text-red-600">You have full access to all dashboards and admin features.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Enhanced Mobile-First Quick Actions & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Enhanced Quick Actions Sidebar */}
          <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl lg:col-span-1 overflow-hidden animate-in slide-in-from-left duration-700">
            <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-1">
              <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Quick Actions</span>
                </CardTitle>
              </CardHeader>
            </div>
            <CardContent className="space-y-4 p-6">
              <Button
                size="lg"
                onClick={() => setShowReportDialog(true)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl py-4 group"
              >
                <Plus className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Report Issue
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => setActiveTab("analytics")}
                className="w-full bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 text-purple-700 hover:from-purple-100 hover:to-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl py-4 group"
              >
                <BarChart3 className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View Analytics
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => setActiveTab("consultations")}
                className="w-full bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 text-orange-700 hover:from-orange-100 hover:to-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl py-4 group"
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Public Consultations
              </Button>

              {/* Enhanced Admin Quick Access */}
              {isAdmin && (
                <>
                  <hr className="my-4 border-gray-200" />
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Admin Access</p>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push('/dashboard/admin')}
                    className="w-full mobile-button bg-gradient-to-r from-red-50 to-orange-50 border-red-200 text-red-700 hover:from-red-100 hover:to-orange-100"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Admin Panel
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push('/dashboard/government')}
                    className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl py-4 group"
                  >
                    <Settings className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Government Panel
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Enhanced Recent Reports Section */}
          <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl lg:col-span-3 overflow-hidden animate-in slide-in-from-right duration-700">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-1">
              <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Recent Reports</span>
                </CardTitle>
                <CardDescription className="text-gray-600">Track your submitted issues and their progress</CardDescription>
              </CardHeader>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                {dashboardData?.reports?.length ? dashboardData.reports.map((report, index) => (
                  <div 
                    key={report.id} 
                    className="group bg-gradient-to-r from-white to-gray-50/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-pulse">
                        {getTypeIcon(report.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-300">{report.title}</h4>
                        <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                          <span>{report.createdAt}</span>
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          <span className="capitalize">{report.type.toLowerCase().replace('_', ' ')}</span>
                        </p>
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
                )) : (
                  <div className="text-center py-8 text-gray-500">
                    <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p>No reports yet. Report your first issue!</p>
                    <Button 
                      onClick={() => setShowReportDialog(true)}
                      className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Report Issue
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile-Optimized Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
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
                <div className="h-64 sm:h-80 lg:h-96 rounded-b-2xl overflow-hidden bg-gray-100">
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
                  {dashboardData?.reports?.length ? dashboardData.reports.slice(0, 5).map((report) => (
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
                  )) : (
                    <div className="text-center py-6 text-gray-500">
                      <AlertTriangle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm">No reports available</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

              <TabsContent value="analytics">
                <Card className="card-mobile border-0">
                  <CardHeader className="pb-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-t-2xl border-b border-purple-100">
                    <CardTitle className="text-purple-800 flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Community Analytics</span>
                    </CardTitle>
                    <CardDescription className="text-purple-600">
                      Real-time insights and trends from community data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 bg-white">
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
                        <h3 className="text-2xl font-bold text-blue-900">{dashboardData?.analytics?.totalReports || 0}</h3>
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
                        <h3 className="text-2xl font-bold text-green-900">{dashboardData?.analytics?.resolvedReports || 0}</h3>
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
                        <h3 className="text-2xl font-bold text-amber-900">{dashboardData?.analytics?.activeUsers || 0}</h3>
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
                          <p className="text-lg font-bold text-blue-600">{dashboardData?.analytics?.issueDistribution?.water || 0}%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-amber-500 rounded-full flex items-center justify-center mb-2">
                            <Construction className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Infrastructure</p>
                          <p className="text-lg font-bold text-amber-600">{dashboardData?.analytics?.issueDistribution?.infrastructure || 0}%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-2">
                            <AlertTriangle className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Flooding</p>
                          <p className="text-lg font-bold text-red-600">{dashboardData?.analytics?.issueDistribution?.flooding || 0}%</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-2">
                            <Trash2 className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">Waste</p>
                          <p className="text-lg font-bold text-purple-600">{dashboardData?.analytics?.issueDistribution?.waste || 0}%</p>
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
                            <span className="text-lg font-bold text-green-600">{dashboardData?.analytics?.totalReports && dashboardData?.analytics?.totalReports > 0 ? Math.round((dashboardData.analytics.resolvedReports / dashboardData.analytics.totalReports) * 100) : 0}%</span>
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
                <Card className="card-mobile border-0">
                  <CardHeader className="pb-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-t-2xl border-b border-orange-100">
                    <CardTitle className="text-orange-800 flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Public Consultations</span>
                    </CardTitle>
                    <CardDescription className="text-orange-600">
                      Participate in community planning and decision making
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 bg-white">
                    {/* Active Consultations */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2 text-orange-600" />
                        Active Consultations
                      </h4>
                      <div className="space-y-4">
                        {dashboardData?.consultations?.length ? dashboardData.consultations.map((consultation, index) => (
                          <div key={consultation.id} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h5 className="text-lg font-semibold text-gray-900 mb-2">{consultation.title}</h5>
                                <p className="text-gray-600 text-sm mb-3">
                                  {consultation.description}
                                </p>
                                <div className="flex items-center space-x-4 text-sm">
                                  <span className="flex items-center text-green-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                    Active until {consultation.endDate}
                                  </span>
                                  <span className="flex items-center text-blue-600">
                                    <Users className="h-4 w-4 mr-1" />
                                    {consultation.participants} participants
                                  </span>
                                </div>
                              </div>
                              <Button 
                                className={`${consultation.userParticipated 
                                  ? 'bg-green-600 hover:bg-green-700' 
                                  : 'bg-orange-600 hover:bg-orange-700'
                                } text-white`}
                              >
                                {consultation.userParticipated ? 'Participated' : 'Participate'}
                              </Button>
                            </div>
                            {consultation.userVote && (
                              <div className="mb-4 text-sm text-gray-600">
                                Your vote: <span className="font-semibold capitalize">{consultation.userVote}</span>
                              </div>
                            )}
                          </div>
                        )) : (
                          <div className="text-center py-8 text-gray-500">
                            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p>No active consultations at the moment</p>
                          </div>
                        )}
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
                          <p className="text-2xl font-bold text-indigo-600">{dashboardData?.participation?.consultationsJoined || 0}</p>
                          <p className="text-sm text-gray-600">Consultations Joined</p>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-3">
                            <Users className="h-10 w-10 text-white" />
                          </div>
                          <p className="text-2xl font-bold text-green-600">{dashboardData?.participation?.commentsPosted || 0}</p>
                          <p className="text-sm text-gray-600">Comments Posted</p>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-3">
                            <AlertTriangle className="h-10 w-10 text-white" />
                          </div>
                          <p className="text-2xl font-bold text-orange-600">{dashboardData?.participation?.issuesReported || 0}</p>
                          <p className="text-sm text-gray-600">Issues Reported</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
        </Tabs>
      </div>

      <ReportIssueDialog 
        open={showReportDialog} 
        onOpenChange={setShowReportDialog} 
        onSuccess={handleReportSuccess}
      />
    </div>
  )
}