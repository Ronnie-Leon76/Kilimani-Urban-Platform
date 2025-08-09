"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  AlertTriangle, 
  Droplets, 
  Construction, 
  Trash2, 
  TrendingUp, 
  Users, 
  BarChart3,
  Shield,
  Settings,
  Bell,
  Eye,
  FileText,
  Calendar,
  MessageSquare,
  ChevronRight,
  Activity,
  Target,
  Zap,
  Globe,
  Plus,
  Loader2
} from "lucide-react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LegalChatbot } from "./legal-chatbot"

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

interface DashboardData {
  stats: {
    totalReports: { value: number; change: string; title: string }
    pendingReports: { value: number; change: string; title: string }
    resolvedThisMonth: { value: number; change: string; title: string }
    activeUsers: { value: number; change: string; title: string }
  }
  recentReports: Array<{
    id: string
    title: string
    type: string
    status: string
    priority: string
    reporter: string
    createdAt: string
    location: string
  }>
  analytics: {
    typeDistribution: Record<string, number>
    statusDistribution: Record<string, number>
    avgResponseTime: number
  }
}

interface ConsultationData {
  consultations: Array<{
    id: string
    title: string
    description: string
    endDate: string
    participants: number
    comments: number
    supportPercentage: number
    opposePercentage: number
    neutralPercentage: number
  }>
  stats: {
    total: number
    active: number
    totalParticipants: number
    engagementRate: number
  }
}

export function GovernmentDashboard({ user }: GovernmentDashboardProps) {
  const [activeTab, setActiveTab] = useState("reports")
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [consultationData, setConsultationData] = useState<ConsultationData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const isAdmin = user.role === "ADMIN"

  // Fetch dashboard data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [dashboardResponse, consultationResponse] = await Promise.all([
          fetch('/api/dashboard/government'),
          fetch('/api/consultations')
        ])

        if (dashboardResponse.ok) {
          const dashboardData = await dashboardResponse.json()
          setDashboardData(dashboardData)
        }

        if (consultationResponse.ok) {
          const consultationData = await consultationResponse.json()
          setConsultationData(consultationData)
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Fallback stats for loading state
  const stats = dashboardData ? [
    { 
      title: dashboardData.stats.totalReports.title, 
      value: dashboardData.stats.totalReports.value.toString(), 
      change: dashboardData.stats.totalReports.change, 
      icon: AlertTriangle, 
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      textColor: "text-blue-700"
    },
    { 
      title: dashboardData.stats.pendingReports.title, 
      value: dashboardData.stats.pendingReports.value.toString(), 
      change: dashboardData.stats.pendingReports.change, 
      icon: Construction, 
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      textColor: "text-amber-700"
    },
    { 
      title: dashboardData.stats.resolvedThisMonth.title, 
      value: dashboardData.stats.resolvedThisMonth.value.toString(), 
      change: dashboardData.stats.resolvedThisMonth.change, 
      icon: TrendingUp, 
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      textColor: "text-green-700"
    },
    { 
      title: dashboardData.stats.activeUsers.title, 
      value: dashboardData.stats.activeUsers.value.toString(), 
      change: dashboardData.stats.activeUsers.change, 
      icon: Users, 
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      textColor: "text-purple-700"
    },
  ] : [
    { 
      title: "Total Reports", 
      value: "...", 
      change: "...", 
      icon: AlertTriangle, 
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      textColor: "text-blue-700"
    },
    { 
      title: "Pending Issues", 
      value: "...", 
      change: "...", 
      icon: Construction, 
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      textColor: "text-amber-700"
    },
    { 
      title: "Resolved This Month", 
      value: "...", 
      change: "...", 
      icon: TrendingUp, 
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      textColor: "text-green-700"
    },
    { 
      title: "Active Users", 
      value: "...", 
      change: "...", 
      icon: Users, 
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      textColor: "text-purple-700"
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
        return <Droplets className="h-4 w-4 text-white" />
      case "INFRASTRUCTURE":
        return <Construction className="h-4 w-4 text-white" />
      case "FLOODING":
        return <AlertTriangle className="h-4 w-4 text-white" />
      case "WASTE_MANAGEMENT":
        return <Trash2 className="h-4 w-4 text-white" />
      case "ILLEGAL_DEVELOPMENT":
        return <AlertTriangle className="h-4 w-4 text-white" />
      default:
        return <AlertTriangle className="h-4 w-4 text-white" />
    }
  }

  // Handler functions for report actions
  const handleViewReport = (reportId: string) => {
    // Open a detailed view of the report
    console.log(`Viewing report: ${reportId}`)
    // You can add modal logic or navigation here
    alert(`Viewing detailed information for report ID: ${reportId}`)
  }

  const handleTakeAction = async (reportId: string, currentStatus: string) => {
    try {
      console.log(`Taking action on report: ${reportId}, current status: ${currentStatus}`)
      
      // Determine next status based on current status
      let nextStatus = currentStatus
      switch (currentStatus) {
        case "PENDING":
          nextStatus = "IN_PROGRESS"
          break
        case "IN_PROGRESS":
          nextStatus = "RESOLVED"
          break
        case "RESOLVED":
          alert("This report is already resolved!")
          return
        default:
          nextStatus = "IN_PROGRESS"
      }

      // Update report status via API
      const response = await fetch(`/api/reports/${reportId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          status: nextStatus,
          resolvedAt: nextStatus === "RESOLVED" ? new Date() : null
        })
      })

      if (response.ok) {
        alert(`Report status updated to: ${nextStatus.replace("_", " ")}`)
        // Refresh dashboard data
        window.location.reload()
      } else {
        throw new Error('Failed to update report status')
      }
    } catch (error) {
      console.error('Error updating report:', error)
      alert('Failed to update report status. Please try again.')
    }
  }

  const getTypeDistributionData = () => {
    if (!dashboardData) return []
    
    const typeMap = {
      WATER_SHORTAGE: { name: "Water Issues", icon: Droplets, color: "blue" },
      INFRASTRUCTURE: { name: "Infrastructure", icon: Construction, color: "amber" },
      FLOODING: { name: "Flooding", icon: AlertTriangle, color: "red" },
      WASTE_MANAGEMENT: { name: "Waste Management", icon: Trash2, color: "purple" },
      ILLEGAL_DEVELOPMENT: { name: "Illegal Development", icon: AlertTriangle, color: "orange" }
    }

    const total = Object.values(dashboardData.analytics.typeDistribution).reduce((sum, count) => sum + count, 0)
    
    return Object.entries(dashboardData.analytics.typeDistribution).map(([type, count]) => {
      const typeInfo = typeMap[type as keyof typeof typeMap] || { name: type, icon: AlertTriangle, color: "gray" }
      const percentage = total > 0 ? Math.round((count / total) * 100) : 0
      
      return {
        type,
        name: typeInfo.name,
        icon: typeInfo.icon,
        color: typeInfo.color,
        count,
        percentage
      }
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading government dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 safe-area-inset relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-purple-100/20 to-cyan-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-100/10 to-teal-100/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Enhanced Mobile-First Header */}
      <div className="relative bg-white/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 safe-area-top animate-in slide-in-from-top duration-500">
        <div className="p-6 border-b border-gray-100/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700">
                  Kilimani Urban Intelligence
                </h1>
                <div className="flex items-center gap-2 animate-in slide-in-from-left duration-700 delay-100">
                  <p className="text-sm text-gray-600 font-medium">Government Dashboard</p>
                  <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200">
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
          <Card className="card-mobile border-0 bg-gradient-to-r from-red-50 to-orange-50 border-red-100 animate-in slide-in-from-top duration-700">
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

        {/* Enhanced Mobile-First Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105 group animate-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${stat.bgGradient} p-1`}>
                <CardContent className="bg-white/90 rounded-t-3xl p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-pulse`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm font-medium truncate ${stat.textColor}`}>{stat.title}</p>
                      <p className="text-xs">
                        <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
                          {stat.change}
                        </span>{" "}
                        from last month
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Mobile-Optimized Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-2 shadow-2xl animate-in slide-in-from-bottom duration-700">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto gap-1 bg-transparent">
              <TabsTrigger 
                value="reports" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-medium">Reports</span>
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs font-medium">Analytics</span>
              </TabsTrigger>
              <TabsTrigger 
                value="satellite" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">Satellite</span>
              </TabsTrigger>
              <TabsTrigger 
                value="planning" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Construction className="w-4 h-4" />
                <span className="text-xs font-medium">Planning</span>
              </TabsTrigger>
              <TabsTrigger 
                value="consultations" 
                className="tab-mobile flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Users className="w-4 h-4" />
                <span className="text-xs font-medium">Community</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reports">
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-700">
              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 p-1">
                <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Recent Community Reports</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">Latest issues reported by Kilimani residents</CardDescription>
                </CardHeader>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {dashboardData?.recentReports?.length ? dashboardData.recentReports.map((report, index) => (
                    <div 
                      key={report.id} 
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom duration-500 border border-gray-100"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-pulse">
                          {getTypeIcon(report.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{report.title}</h4>
                          <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                            <span>Reported by {report.reporter}</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{report.location}</span>
                          </p>
                          <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <Badge className={getStatusColor(report.status)}>
                              {report.status.replace("_", " ")}
                            </Badge>
                            <Badge className={getPriorityColor(report.priority)}>
                              {report.priority}
                            </Badge>
                            <span className="text-xs text-gray-500">{report.createdAt}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-col sm:flex-row ml-auto">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-indigo-100 hover:scale-105 transition-all duration-300 shadow-md"
                            onClick={() => handleViewReport(report.id)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:scale-105 transition-all duration-300"
                            onClick={() => handleTakeAction(report.id, report.status)}
                          >
                            <Target className="w-4 h-4 mr-2" />
                            Action
                          </Button>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500 bg-white rounded-2xl border border-gray-100">
                      <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p>No reports available</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-left duration-700">
                <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 p-1">
                  <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Report Trends</span>
                    </CardTitle>
                  </CardHeader>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 group hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Activity className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-blue-900">Weekly Reports</span>
                        </div>
                        <span className="text-xl font-bold text-blue-600">
                          {dashboardData?.stats.totalReports.change || "+0%"}
                        </span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out" 
                          style={{width: `${Math.min(100, Math.max(10, (dashboardData?.stats.totalReports.value || 0) * 10))}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-blue-700 mt-2">Compared to last week</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 group hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-green-900">Resolution Rate</span>
                        </div>
                        <span className="text-xl font-bold text-green-600">
                          {dashboardData ? 
                            Math.round((dashboardData.stats.resolvedThisMonth.value / Math.max(1, dashboardData.stats.totalReports.value)) * 100) + '%'
                            : '0%'
                          }
                        </span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out" 
                          style={{width: `${dashboardData ? Math.round((dashboardData.stats.resolvedThisMonth.value / Math.max(1, dashboardData.stats.totalReports.value)) * 100) : 0}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-green-700 mt-2">Target: 85%</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 group hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-orange-900">Avg Response Time</span>
                        </div>
                        <span className="text-xl font-bold text-orange-600">
                          {dashboardData?.analytics.avgResponseTime ? 
                            `${dashboardData.analytics.avgResponseTime} days` 
                            : '0 days'
                          }
                        </span>
                      </div>
                      <div className="w-full bg-orange-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out" 
                          style={{width: `${Math.min(100, Math.max(10, 100 - (dashboardData?.analytics.avgResponseTime || 0) * 10))}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-orange-700 mt-2">Target: &lt;3 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-right duration-700">
                <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-1">
                  <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Issue Distribution</span>
                    </CardTitle>
                  </CardHeader>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:animate-pulse">
                        <Droplets className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-1">
                        {dashboardData ? 
                          Math.round((dashboardData.analytics.typeDistribution.WATER_SHORTAGE || 0) / Math.max(1, dashboardData.stats.totalReports.value) * 100) + '%'
                          : '0%'
                        }
                      </p>
                      <p className="text-sm text-blue-700 font-medium">Water Issues</p>
                    </div>
                    <div className="text-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:animate-pulse">
                        <Construction className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-amber-600 mb-1">
                        {dashboardData ? 
                          Math.round((dashboardData.analytics.typeDistribution.INFRASTRUCTURE || 0) / Math.max(1, dashboardData.stats.totalReports.value) * 100) + '%'
                          : '0%'
                        }
                      </p>
                      <p className="text-sm text-amber-700 font-medium">Infrastructure</p>
                    </div>
                    <div className="text-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200 group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:animate-pulse">
                        <AlertTriangle className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-red-600 mb-1">
                        {dashboardData ? 
                          Math.round((dashboardData.analytics.typeDistribution.FLOODING || 0) / Math.max(1, dashboardData.stats.totalReports.value) * 100) + '%'
                          : '0%'
                        }
                      </p>
                      <p className="text-sm text-red-700 font-medium">Flooding</p>
                    </div>
                    <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:animate-pulse">
                        <Trash2 className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-purple-600 mb-1">
                        {dashboardData ? 
                          Math.round((dashboardData.analytics.typeDistribution.WASTE_MANAGEMENT || 0) / Math.max(1, dashboardData.stats.totalReports.value) * 100) + '%'
                          : '0%'
                        }
                      </p>
                      <p className="text-sm text-purple-700 font-medium">Waste Management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="satellite">
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-700">
              <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 p-1">
                <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Satellite Analysis</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">AI-powered analysis of satellite imagery for urban monitoring</CardDescription>
                </CardHeader>
              </div>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Satellite Analysis Dashboard</h3>
                  <p className="text-gray-500 mb-6">Advanced satellite imagery analysis and monitoring tools will be implemented here</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4 border border-cyan-200">
                      <h4 className="font-semibold text-cyan-800 mb-2">Land Use Monitoring</h4>
                      <p className="text-sm text-cyan-600">Track changes in land use patterns</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Development Tracking</h4>
                      <p className="text-sm text-blue-600">Monitor construction activities</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-2">Environmental Analysis</h4>
                      <p className="text-sm text-indigo-600">Assess environmental changes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="planning">
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-700">
              <div className="bg-gradient-to-r from-green-50 via-teal-50 to-emerald-50 p-1">
                <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg">
                      <Construction className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Development Planning</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">Local Physical Development Plan and approved projects</CardDescription>
                </CardHeader>
              </div>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
                    <Construction className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Planning Dashboard</h3>
                  <p className="text-gray-500 mb-6">Comprehensive planning tools and project management will be implemented here</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3">Current Projects</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">Road Infrastructure</span>
                          <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">Water Systems</span>
                          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">Planning</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
                      <h4 className="font-semibold text-teal-800 mb-3">Upcoming Developments</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-teal-600">Community Park</span>
                          <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Approved</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-teal-600">Housing Complex</span>
                          <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">Review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultations">
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-700">
              <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 p-1">
                <CardHeader className="bg-white/90 rounded-t-3xl pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Public Consultations</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Manage community consultations and gather feedback
                  </CardDescription>
                </CardHeader>
              </div>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Active Consultations */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                      Active Consultations
                    </h4>
                    <div className="space-y-6">
                      {consultationData?.consultations?.length ? consultationData.consultations.map((consultation, index) => (
                        <div 
                          key={consultation.id} 
                          className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] shadow-lg"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                                  <Construction className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h5 className="font-bold text-gray-900">{consultation.title}</h5>
                                  <p className="text-sm text-gray-600">{consultation.description}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="w-4 h-4 text-green-600" />
                                  <span className="text-green-600 font-medium">Ends {consultation.endDate}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Users className="w-4 h-4 text-blue-600" />
                                  <span className="text-blue-600 font-medium">{consultation.participants} participants</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <MessageSquare className="w-4 h-4 text-purple-600" />
                                  <span className="text-purple-600 font-medium">{consultation.comments} comments</span>
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-center py-2 rounded-xl text-sm font-semibold border border-green-300">
                                  {consultation.supportPercentage}% Support
                                </div>
                                <div className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 text-center py-2 rounded-xl text-sm font-semibold border border-red-300">
                                  {consultation.opposePercentage}% Oppose
                                </div>
                                <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-center py-2 rounded-xl text-sm font-semibold border border-gray-300">
                                  {consultation.neutralPercentage}% Neutral
                                </div>
                              </div>
                            </div>
                            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg ml-4">
                              <Settings className="w-4 h-4 mr-1" />
                              Manage
                            </Button>
                          </div>
                        </div>
                      )) : (
                        <div className="text-center py-8 text-gray-500 bg-white rounded-2xl border border-gray-100">
                          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p>No active consultations</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Consultation Stats */}
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      Consultation Statistics
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 shadow-lg border border-indigo-200">
                        <div className="text-3xl font-bold text-indigo-600 mb-1">{consultationData?.stats?.total || 0}</div>
                        <div className="text-sm text-gray-600 font-medium">Total Consultations</div>
                      </div>
                      <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 shadow-lg border border-green-200">
                        <div className="text-3xl font-bold text-green-600 mb-1">{consultationData?.stats?.active || 0}</div>
                        <div className="text-sm text-gray-600 font-medium">Currently Active</div>
                      </div>
                      <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 shadow-lg border border-orange-200">
                        <div className="text-3xl font-bold text-orange-600 mb-1">{consultationData?.stats?.totalParticipants || 0}</div>
                        <div className="text-sm text-gray-600 font-medium">Total Participants</div>
                      </div>
                      <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 shadow-lg border border-purple-200">
                        <div className="text-3xl font-bold text-purple-600 mb-1">{consultationData?.stats?.engagementRate || 0}%</div>
                        <div className="text-sm text-gray-600 font-medium">Engagement Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                      <Plus className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Create New Consultation
                    </Button>
                    <Button variant="outline" className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-300 text-orange-700 hover:from-orange-100 hover:to-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <Eye className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      View All Consultations
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Legal Chatbot */}
      <LegalChatbot />
    </div>
  )
}
