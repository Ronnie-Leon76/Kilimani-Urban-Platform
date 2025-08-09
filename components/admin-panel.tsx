"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
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
  Smartphone,
  Loader2,
  Scale,
  Vote,
  Calendar,
  FileCheck,
  Navigation,
  ThumbsUp,
  ThumbsDown,
  Users as UsersIcon,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Gavel
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

interface Report {
  id: string
  title: string
  type: string
  status: string
  priority: string
  location: string
  reporter: string
  createdAt: string
}

interface AdminDashboardData {
  overview: {
    totalUsers: number
    totalReports: number
    pendingReports: number
    resolvedReports: number
    activeConsultations: number
    systemUptime: number
    mobileUsers: number
    avgResponseTime: number
  }
  recentReports: Report[]
  systemUsers: Array<{
    id: string
    name: string
    email: string
    role: string
    status: string
    joinDate: string
    reportsCount: number
    lastActive: string
  }>
  analytics: {
    weeklyGrowth: number
    resolutionRate: number
    userGrowth: number
    roleDistribution: Record<string, number>
  }
  trends: {
    reportsThisWeek: number
    trend: 'up' | 'down' | 'stable'
  }
}

interface AdminPanelProps {
  user: User
}

export function AdminPanel({ user }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [dashboardData, setDashboardData] = useState<AdminDashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [isUpdatingRole, setIsUpdatingRole] = useState(false)
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  const [isAnalyzingLaws, setIsAnalyzingLaws] = useState(false)
  const [reportAnalysis, setReportAnalysis] = useState<any>(null)
  const [votingData, setVotingData] = useState<any>(null)
  const [newVote, setNewVote] = useState({ vote: '', comment: '' })
  const router = useRouter()

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/dashboard/admin')
        if (response.ok) {
          const data = await response.json()
          setDashboardData(data)
        } else {
          console.error('Failed to fetch admin dashboard data')
        }
      } catch (error) {
        console.error('Error fetching admin dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  // Helper functions
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

  // Handler functions for report actions
  const handleViewReport = async (reportId: string) => {
    try {
      setLoading(true)
      
      // Fetch detailed report information
      const response = await fetch(`/api/reports/${reportId}`)
      if (response.ok) {
        const reportData = await response.json()
        setSelectedReport(reportData)
        
        // Fetch voting data if public voting is enabled
        if (reportData.publicVotingEnabled) {
          const votingResponse = await fetch(`/api/reports/vote?reportId=${reportId}`)
          if (votingResponse.ok) {
            const voting = await votingResponse.json()
            setVotingData(voting)
          }
        }
        
        setIsReportModalOpen(true)
      } else {
        throw new Error('Failed to fetch report details')
      }
    } catch (error) {
      console.error('Error fetching report details:', error)
      alert('Failed to load report details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAnalyzeLaws = async (reportId: string) => {
    try {
      setIsAnalyzingLaws(true)
      const response = await fetch('/api/reports/analyze-laws', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reportId })
      })

      if (response.ok) {
        const analysis = await response.json()
        setReportAnalysis(analysis)
        
        // Refresh the report data
        if (selectedReport) {
          const reportResponse = await fetch(`/api/reports/${reportId}`)
          if (reportResponse.ok) {
            const updatedReport = await reportResponse.json()
            setSelectedReport(updatedReport)
          }
        }
      } else {
        const error = await response.json()
        throw new Error(error.error || 'Failed to analyze laws')
      }
    } catch (error) {
      console.error('Error analyzing laws:', error)
      alert(`Failed to analyze laws: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsAnalyzingLaws(false)
    }
  }

  const handleSubmitVote = async (reportId: string) => {
    if (!newVote.vote) {
      alert('Please select a vote option')
      return
    }

    try {
      const response = await fetch('/api/reports/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reportId,
          vote: newVote.vote,
          comment: newVote.comment
        })
      })

      if (response.ok) {
        alert('Vote submitted successfully')
        
        // Refresh voting data
        const votingResponse = await fetch(`/api/reports/vote?reportId=${reportId}`)
        if (votingResponse.ok) {
          const voting = await votingResponse.json()
          setVotingData(voting)
        }
        
        setNewVote({ vote: '', comment: '' })
      } else {
        const error = await response.json()
        throw new Error(error.error || 'Failed to submit vote')
      }
    } catch (error) {
      console.error('Error submitting vote:', error)
      alert(`Failed to submit vote: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleEditReport = (reportId: string) => {
    console.log(`Admin editing report: ${reportId}`)
    alert(`Opening edit interface for report ID: ${reportId}`)
  }

  const handleDeleteReport = async (reportId: string) => {
    if (!confirm('Are you sure you want to delete this report? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/reports/${reportId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        alert('Report deleted successfully')
        // Refresh dashboard data
        window.location.reload()
      } else {
        throw new Error('Failed to delete report')
      }
    } catch (error) {
      console.error('Error deleting report:', error)
      alert('Failed to delete report. Please try again.')
    }
  }

  // User management functions
  const handleViewUser = async (userId: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/users/${userId}`)
      if (response.ok) {
        const userData = await response.json()
        setSelectedUser(userData)
        setIsUserModalOpen(true)
      } else {
        throw new Error('Failed to fetch user details')
      }
    } catch (error) {
      console.error('Error fetching user details:', error)
      alert('Failed to load user details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateUserRole = async (userId: string, newRole: string) => {
    if (!confirm(`Are you sure you want to change this user's role to ${newRole}?`)) {
      return
    }

    try {
      setIsUpdatingRole(true)
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'updateRole',
          role: newRole
        })
      })

      if (response.ok) {
        const result = await response.json()
        alert(`User role updated successfully to ${newRole}`)
        // Refresh dashboard data
        const refreshResponse = await fetch('/api/dashboard/admin')
        if (refreshResponse.ok) {
          const newData = await refreshResponse.json()
          setDashboardData(newData)
        }
        setIsUserModalOpen(false)
      } else {
        const error = await response.json()
        throw new Error(error.error || 'Failed to update user role')
      }
    } catch (error) {
      console.error('Error updating user role:', error)
      alert(`Failed to update user role: ${typeof error === "object" && error !== null && "message" in error ? (error as { message: string }).message : String(error)}`)
    } finally {
      setIsUpdatingRole(false)
    }
  }

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!confirm(`Are you sure you want to delete user "${userName}"? This will also delete all their reports and cannot be undone.`)) {
      return
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        alert('User deleted successfully')
        // Refresh dashboard data
        const refreshResponse = await fetch('/api/dashboard/admin')
        if (refreshResponse.ok) {
          const newData = await refreshResponse.json()
          setDashboardData(newData)
        }
        setIsUserModalOpen(false)
      } else {
        const error = await response.json()
        throw new Error(error.error || 'Failed to delete user')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      alert(`Failed to delete user: ${typeof error === "object" && error !== null && "message" in error ? (error as { message: string }).message : String(error)}`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  // Remove dummy data since we're using API data

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-2 sm:p-4 pb-20 sm:pb-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-green-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Mobile-First Header with Enhanced Animation */}
      <div className="relative bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl p-6 mb-6 sticky top-2 z-50 animate-in slide-in-from-top duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600 animate-in slide-in-from-left duration-700 delay-100">Kilimani Urban Intelligence Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3 animate-in slide-in-from-right duration-700">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/dashboard/government')}
              className="hidden sm:flex bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-indigo-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Settings className="w-4 h-4 mr-2" />
              Government Panel
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/dashboard/resident')}
              className="hidden sm:flex bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-700 hover:from-green-100 hover:to-emerald-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Users className="w-4 h-4 mr-2" />
              Resident View
            </Button>
            <span className="text-sm text-gray-600 font-medium">Welcome, {user.name}</span>
            <Badge className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full shadow-lg animate-bounce">
              ADMIN
            </Badge>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => signOut()}
              className="hidden sm:flex hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-300"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile-Optimized Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="relative bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl p-3 overflow-hidden animate-in slide-in-from-bottom duration-500 delay-200">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
          <div className="relative overflow-x-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-transparent p-1">
              <TabsTrigger 
                value="overview" 
                className="flex flex-col gap-2 py-4 px-3 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg group"
              >
                <BarChart3 className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-xs font-semibold">Overview</span>
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="flex flex-col gap-2 py-4 px-3 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg group"
              >
                <Users className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-xs font-semibold">Users</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="flex flex-col gap-2 py-4 px-3 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg group"
              >
                <FileText className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-xs font-semibold">Reports</span>
              </TabsTrigger>
              <TabsTrigger 
                value="consultations" 
                className="flex flex-col gap-2 py-4 px-3 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg group"
              >
                <MessageSquare className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-xs font-semibold">Consultations</span>
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="flex flex-col gap-2 py-4 px-3 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg group"
              >
                <Activity className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-xs font-semibold">Analytics</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="flex flex-col gap-2 py-4 px-3 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-500 data-[state=active]:to-gray-700 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg group"
              >
                <Settings className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-xs font-semibold">Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Overview Tab - Enhanced with Stunning Animations */}
        <TabsContent value="overview" className="space-y-6">
          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            <Card className="group bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-100">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{dashboardData?.overview?.totalUsers || 0}</p>
                    <p className="text-sm text-gray-600 font-medium">Total Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-green-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{dashboardData?.overview?.totalReports || 0}</p>
                    <p className="text-sm text-gray-600 font-medium">Total Reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-yellow-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">{dashboardData?.overview?.pendingReports || 0}</p>
                    <p className="text-sm text-gray-600 font-medium">Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-400">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{dashboardData?.overview?.resolvedReports || 0}</p>
                    <p className="text-sm text-gray-600 font-medium">Resolved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-teal-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-500">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">{dashboardData?.overview?.activeConsultations || 0}</p>
                    <p className="text-sm text-gray-600 font-medium">Active Consultations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-indigo-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-600">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{dashboardData?.overview?.systemUptime || 0}%</p>
                    <p className="text-sm text-gray-600 font-medium">System Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-rose-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-700">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">{dashboardData?.overview?.mobileUsers || 0}</p>
                    <p className="text-sm text-gray-600 font-medium">Mobile Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-amber-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl shadow-lg group-hover:animate-pulse">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">{dashboardData?.overview?.avgResponseTime || 0}h</p>
                    <p className="text-sm text-gray-600 font-medium">Avg Response</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Recent Activity Section */}
          <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-700 delay-300">
            <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 p-1">
              <CardHeader className="bg-white/90 rounded-t-3xl">
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Recent Reports Requiring Attention</span>
                </CardTitle>
                <CardDescription className="text-gray-600">Latest community reports that need admin review</CardDescription>
              </CardHeader>
            </div>
            <CardContent className="space-y-4 p-6">
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 w-6 animate-spin text-blue-500" />
                  <span className="ml-2 text-gray-500">Loading reports...</span>
                </div>
              ) : dashboardData?.recentReports && dashboardData.recentReports.length > 0 ? (
                dashboardData.recentReports.map((report, index) => (
                  <div 
                    key={report.id} 
                    className="group flex items-center justify-between p-6 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{report.title}</p>
                      <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                        <span className="font-medium">{report.reporter}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{report.location}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <Badge className={`${getPriorityColor(report.priority)} text-xs px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-all duration-300`}>
                        {report.priority.toUpperCase()}
                      </Badge>
                      <Badge className={`${getStatusColor(report.status)} text-xs px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-all duration-300`}>
                        {report.status.replace("_", " ").toUpperCase()}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="hidden sm:flex hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 group-hover:scale-110"
                        onClick={() => handleViewReport(report.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No recent reports found
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Enhanced Users Management Tab */}
        <TabsContent value="users" className="space-y-6">
          <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-700">
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-1">
              <CardHeader className="bg-white/90 rounded-t-3xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">User Management</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">Manage platform users and permissions</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-6">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
            </div>
            <CardContent className="p-6">
              {/* Enhanced Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    placeholder="Search users by name, email, or role..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 rounded-2xl border-0 bg-gray-50/50 focus:bg-white shadow-md focus:shadow-xl transition-all duration-300"
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-gray-50 to-white border-gray-200 hover:from-gray-100 hover:to-gray-50 rounded-2xl px-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Enhanced Users List */}
              <div className="space-y-4">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
                    <span className="ml-2 text-gray-500">Loading users...</span>
                  </div>
                ) : dashboardData?.systemUsers && dashboardData.systemUsers.length > 0 ? (
                  dashboardData.systemUsers
                    .filter(systemUser => 
                      searchTerm === "" || 
                      systemUser.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      systemUser.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      systemUser.role.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((systemUser, index) => (
                      <div 
                        key={systemUser.id} 
                        className="group flex items-center justify-between p-6 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-left duration-500"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:animate-pulse">
                            {systemUser.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold truncate text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{systemUser.name}</p>
                            <p className="text-sm text-gray-600 truncate mt-1">{systemUser.email}</p>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{systemUser.reportsCount} reports</span>
                              <span className="text-xs text-gray-500">Last active: {systemUser.lastActive}</span>
                              <span className="text-xs text-gray-500">Joined: {systemUser.joinDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <Badge className={`${getRoleColor(systemUser.role)} text-xs px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-all duration-300`}>
                            {systemUser.role}
                          </Badge>
                          <Badge className={`${getStatusColor(systemUser.status)} text-xs px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-all duration-300`}>
                            {systemUser.status.toUpperCase()}
                          </Badge>
                          <div className="flex gap-1">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="hover:bg-blue-50 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                              onClick={() => handleViewUser(systemUser.id)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Select onValueChange={(newRole) => handleUpdateUserRole(systemUser.id, newRole)}>
                              <SelectTrigger className="w-8 h-8 p-0 border-0 hover:bg-green-50">
                                <SelectValue>
                                  <Edit className="w-4 h-4 text-green-600" />
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ADMIN">Admin</SelectItem>
                                <SelectItem value="GOVERNMENT_OFFICIAL">Government Official</SelectItem>
                                <SelectItem value="RESIDENT">Resident</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="hover:bg-red-50 hover:text-red-600 hover:scale-110 transition-all duration-300"
                              onClick={() => handleDeleteUser(systemUser.id, systemUser.name)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No users found
                  </div>
                )}
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
                  <span className="text-xs font-medium">Pending ({dashboardData?.overview?.pendingReports || 0})</span>
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
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                    <span className="ml-2 text-gray-500">Loading reports...</span>
                  </div>
                ) : dashboardData?.recentReports && dashboardData.recentReports.length > 0 ? (
                  dashboardData.recentReports.map((report) => (
                    <div key={report.id} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium truncate">{report.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">By {report.reporter} • Status: {report.status}</p>
                          <p className="text-xs text-gray-500 mt-1">{report.createdAt}</p>
                        </div>
                        <div className="flex gap-1 ml-3">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="hover:bg-blue-100 hover:scale-110 transition-all duration-300"
                            onClick={() => handleViewReport(report.id)}
                          >
                            <Eye className="w-4 h-4 text-blue-600" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="hover:bg-green-100 hover:scale-110 transition-all duration-300"
                            onClick={() => handleEditReport(report.id)}
                          >
                            <Edit className="w-4 h-4 text-green-600" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="hover:bg-red-100 hover:scale-110 transition-all duration-300"
                            onClick={() => handleDeleteReport(report.id)}
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(report.priority)}`}>
                          {report.priority}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No recent reports found
                  </div>
                )}
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

      {/* Enhanced Report Details Modal */}
      <Dialog open={isReportModalOpen} onOpenChange={setIsReportModalOpen}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Detailed Report Analysis
            </DialogTitle>
            <DialogDescription>
              Comprehensive report details, law analysis, and public participation
            </DialogDescription>
          </DialogHeader>
          
          {selectedReport && (
            <div className="space-y-6">
              {/* Report Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{selectedReport.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Type:</span> {selectedReport.type}</p>
                    <p><span className="font-medium">Status:</span> <Badge className={getStatusColor(selectedReport.status)}>{selectedReport.status}</Badge></p>
                    <p><span className="font-medium">Priority:</span> <Badge className={getPriorityColor(selectedReport.priority)}>{selectedReport.priority}</Badge></p>
                    <p><span className="font-medium">Reporter:</span> {selectedReport.reporter}</p>
                    <p><span className="font-medium">Date:</span> {new Date(selectedReport.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Location Information */}
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Address:</span> {selectedReport.address}</p>
                    <p><span className="font-medium">Coordinates:</span> {selectedReport.latitude}, {selectedReport.longitude}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => window.open(`https://maps.google.com/?q=${selectedReport.latitude},${selectedReport.longitude}`, '_blank')}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      View on Map
                    </Button>
                  </div>
                </div>
              </div>

              {/* Report Description */}
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-700 whitespace-pre-wrap">{selectedReport.description}</p>
              </div>

              {/* Law Analysis Section */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Legal Analysis
                  </h4>
                  <Button 
                    onClick={() => handleAnalyzeLaws(selectedReport.id)}
                    disabled={isAnalyzingLaws}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {isAnalyzingLaws ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Gavel className="w-4 h-4 mr-2" />
                        Analyze Laws
                      </>
                    )}
                  </Button>
                </div>

                {selectedReport.infringedLaws && selectedReport.infringedLaws.length > 0 && (
                  <div className="mb-4">
                    <h5 className="font-medium text-gray-800 mb-2">Relevant Laws & Violations:</h5>
                    <div className="space-y-2">
                      {selectedReport.infringedLaws.map((law: string, index: number) => (
                        <div key={index} className="p-2 bg-red-50 rounded border border-red-200">
                          <p className="text-sm text-red-800">{law}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {reportAnalysis && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                        <h6 className="font-medium text-yellow-800">Severity: {reportAnalysis.analysis?.severity}</h6>
                        <p className="text-sm text-yellow-700 mt-1">{reportAnalysis.analysis?.reasoning?.substring(0, 100)}...</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded border border-blue-200">
                        <h6 className="font-medium text-blue-800">Legal Basis</h6>
                        <p className="text-sm text-blue-700 mt-1">{reportAnalysis.analysis?.legalBasis}</p>
                      </div>
                    </div>

                    {reportAnalysis.analysis?.supportingLaws && (
                      <div>
                        <h6 className="font-medium text-gray-800 mb-2">Laws Supporting Resident's Complaint:</h6>
                        <div className="space-y-2">
                          {reportAnalysis.analysis.supportingLaws.map((law: string, index: number) => (
                            <div key={index} className="p-2 bg-green-50 rounded border border-green-200">
                              <p className="text-sm text-green-800">{law}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {reportAnalysis.analysis?.recommendedActions && (
                      <div>
                        <h6 className="font-medium text-gray-800 mb-2">Recommended Actions:</h6>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          {reportAnalysis.analysis.recommendedActions.map((action: string, index: number) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Public Participation Section */}
              {selectedReport.publicVotingEnabled && (
                <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Vote className="w-4 h-4" />
                    Public Participation
                  </h4>

                  {votingData && (
                    <div className="space-y-4">
                      {/* Voting Statistics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-3 bg-green-100 rounded text-center">
                          <div className="text-2xl font-bold text-green-600">{votingData.statistics?.votesFor || 0}</div>
                          <div className="text-sm text-gray-600">Support ({votingData.statistics?.supportPercentage || 0}%)</div>
                        </div>
                        <div className="p-3 bg-red-100 rounded text-center">
                          <div className="text-2xl font-bold text-red-600">{votingData.statistics?.votesAgainst || 0}</div>
                          <div className="text-sm text-gray-600">Oppose ({votingData.statistics?.opposePercentage || 0}%)</div>
                        </div>
                        <div className="p-3 bg-gray-100 rounded text-center">
                          <div className="text-2xl font-bold text-gray-600">{votingData.statistics?.neutralVotes || 0}</div>
                          <div className="text-sm text-gray-600">Neutral ({votingData.statistics?.neutralPercentage || 0}%)</div>
                        </div>
                      </div>

                      {/* Voting Deadline */}
                      {selectedReport.votingDeadline && (
                        <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-yellow-600" />
                            <span className="font-medium text-yellow-800">
                              Voting Deadline: {new Date(selectedReport.votingDeadline).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Majority Status */}
                      {votingData.statistics?.majorityReached && (
                        <div className="p-3 bg-green-50 rounded border border-green-200">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-800">
                              Majority Support Reached - Issue escalated to HIGH priority
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Submit Vote (if admin wants to participate) */}
                      <div className="p-4 bg-white rounded border">
                        <h6 className="font-medium text-gray-800 mb-3">Submit Your Vote</h6>
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            {['support', 'oppose', 'neutral'].map((option) => (
                              <Button
                                key={option}
                                variant={newVote.vote === option ? "default" : "outline"}
                                size="sm"
                                onClick={() => setNewVote({...newVote, vote: option})}
                                className={option === 'support' ? 'bg-green-600 hover:bg-green-700' : 
                                          option === 'oppose' ? 'bg-red-600 hover:bg-red-700' : 
                                          'bg-gray-600 hover:bg-gray-700'}
                              >
                                {option === 'support' && <ThumbsUp className="w-4 h-4 mr-1" />}
                                {option === 'oppose' && <ThumbsDown className="w-4 h-4 mr-1" />}
                                {option === 'neutral' && <UsersIcon className="w-4 h-4 mr-1" />}
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                              </Button>
                            ))}
                          </div>
                          <textarea
                            placeholder="Optional comment..."
                            value={newVote.comment}
                            onChange={(e) => setNewVote({...newVote, comment: e.target.value})}
                            className="w-full p-2 border rounded text-sm"
                            rows={2}
                          />
                          <Button 
                            onClick={() => handleSubmitVote(selectedReport.id)}
                            disabled={!newVote.vote}
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            Submit Vote
                          </Button>
                        </div>
                      </div>

                      {/* Recent Votes */}
                      {votingData.votes && votingData.votes.length > 0 && (
                        <div>
                          <h6 className="font-medium text-gray-800 mb-2">Recent Votes ({votingData.votes.length})</h6>
                          <div className="max-h-40 overflow-y-auto space-y-2">
                            {votingData.votes.slice(0, 10).map((vote: any, index: number) => (
                              <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">{vote.voterName} ({vote.voterRole})</span>
                                  <Badge className={vote.vote === 'support' ? 'bg-green-500' : 
                                                 vote.vote === 'oppose' ? 'bg-red-500' : 'bg-gray-500'}>
                                    {vote.vote}
                                  </Badge>
                                </div>
                                {vote.comment && (
                                  <p className="text-gray-600 mt-1">{vote.comment}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(vote.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Meeting Information */}
              {selectedReport.meetingScheduled && (
                <div className="p-4 border rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Ward Administrator Meeting
                  </h4>
                  {selectedReport.meetingDate && (
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-medium">Scheduled:</span> {new Date(selectedReport.meetingDate).toLocaleDateString()}
                    </p>
                  )}
                  {selectedReport.meetingMinutes && (
                    <div className="mt-3">
                      <h6 className="font-medium text-gray-800 mb-2">Meeting Notes:</h6>
                      <div className="p-3 bg-gray-50 rounded text-sm whitespace-pre-wrap">
                        {selectedReport.meetingMinutes}
                      </div>
                    </div>
                  )}
                  {selectedReport.finalVerdict && (
                    <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
                      <h6 className="font-medium text-green-800 mb-2">Final Verdict:</h6>
                      <p className="text-sm text-green-700">{selectedReport.finalVerdict}</p>
                      {selectedReport.verdictDate && (
                        <p className="text-xs text-gray-500 mt-1">
                          Decided on: {new Date(selectedReport.verdictDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Images */}
              {selectedReport.images && selectedReport.images.length > 0 && (
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Attached Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {selectedReport.images.map((image: string, index: number) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Report image ${index + 1}`}
                        className="w-full h-24 object-cover rounded border cursor-pointer hover:opacity-80"
                        onClick={() => window.open(image, '_blank')}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsReportModalOpen(false)}
            >
              Close
            </Button>
            {selectedReport && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleEditReport(selectedReport.id)}
                  className="bg-green-50 hover:bg-green-100 text-green-700"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Report
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteReport(selectedReport.id)}
                  className="bg-red-500 hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Report
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User Details Modal */}
      <Dialog open={isUserModalOpen} onOpenChange={setIsUserModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              User Details
            </DialogTitle>
            <DialogDescription>
              View and manage user information and permissions
            </DialogDescription>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-6">
              {/* User Profile Section */}
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                  {selectedUser.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{selectedUser.name || 'Unnamed User'}</h3>
                  <p className="text-gray-600">{selectedUser.email}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge className={`${getRoleColor(selectedUser.role)} text-xs px-3 py-1 rounded-full`}>
                      {selectedUser.role}
                    </Badge>
                    <span className="text-sm text-gray-500">Joined: {selectedUser.joinDate}</span>
                    <span className="text-sm text-gray-500">Last active: {selectedUser.lastActive}</span>
                  </div>
                </div>
              </div>

              {/* User Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{selectedUser.reportsCount}</div>
                  <div className="text-sm text-gray-600">Total Reports</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{selectedUser.role}</div>
                  <div className="text-sm text-gray-600">Current Role</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">Active</div>
                  <div className="text-sm text-gray-600">Account Status</div>
                </div>
              </div>

              {/* Role Management Section */}
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Role Management
                </h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="role-select" className="text-sm text-gray-600">Change User Role</Label>
                    <Select
                      defaultValue={selectedUser.role}
                      onValueChange={(newRole) => handleUpdateUserRole(selectedUser.id, newRole)}
                      disabled={isUpdatingRole}
                    >
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ADMIN">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-purple-600" />
                            Admin
                          </div>
                        </SelectItem>
                        <SelectItem value="GOVERNMENT_OFFICIAL">
                          <div className="flex items-center gap-2">
                            <Settings className="w-4 h-4 text-blue-600" />
                            Government Official
                          </div>
                        </SelectItem>
                        <SelectItem value="RESIDENT">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-green-600" />
                            Resident
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="text-xs text-gray-500 p-2 bg-yellow-50 rounded border border-yellow-200">
                    <span className="font-medium">Note:</span> Changing user roles will affect their access permissions immediately.
                  </div>
                </div>
              </div>

              {/* Recent Reports */}
              {selectedUser.recentReports && selectedUser.recentReports.length > 0 && (
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Recent Reports ({selectedUser.recentReports.length})
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {selectedUser.recentReports.map((report: any) => (
                      <div key={report.id} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{report.title}</p>
                          <p className="text-gray-500 text-xs">
                            {report.type} • {report.status} • {report.createdAt}
                          </p>
                        </div>
                        <Badge className={`${getPriorityColor(report.priority)} text-xs px-2 py-1 rounded-full ml-2`}>
                          {report.priority}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsUserModalOpen(false)}
            >
              Close
            </Button>
            {selectedUser && (
              <Button
                variant="destructive"
                onClick={() => handleDeleteUser(selectedUser.id, selectedUser.name)}
                className="bg-red-500 hover:bg-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete User
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 p-3 sm:hidden">
        <div className="grid grid-cols-3 gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => router.push('/dashboard/government')}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-indigo-100"
          >
            <Settings className="w-4 h-4 mr-1" />
            Gov
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => router.push('/dashboard/resident')}
            className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-700 hover:from-green-100 hover:to-emerald-100"
          >
            <Users className="w-4 h-4 mr-1" />
            Resident
          </Button>
          <Button 
            variant="outline" 
            onClick={() => signOut()}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 hover:from-red-600 hover:to-pink-600"
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Legal Chatbot */}
      <LegalChatbot />
    </div>
  )
}

export default AdminPanel
