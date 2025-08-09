"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Eye, 
  MapPin, 
  Calendar, 
  User, 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  AlertTriangle,
  FileText,
  Camera,
  Vote,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Gavel,
  Scale
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ReportDetailsModalProps {
  reportId: string
  children: React.ReactNode
  onActionTaken?: () => void
}

interface ReportDetails {
  id: string
  title: string
  description: string
  type: string
  status: string
  priority: string
  address: string
  latitude: number
  longitude: number
  images: string[]
  reporter: string
  createdAt: string
  updatedAt: string
  resolvedAt?: string
  infringedLaws: string[]
  lawAnalysisDate?: string
  publicVotingEnabled: boolean
  votesFor: number
  votesAgainst: number
  votingDeadline?: string
  meetingScheduled: boolean
  meetingDate?: string
  finalVerdict?: string
  verdictDate?: string
}

interface Comment {
  id: string
  content: string
  author: string
  createdAt: string
  support: 'FOR' | 'AGAINST' | 'NEUTRAL'
}

interface PublicConsultation {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  status: string
  totalVotes: number
  totalComments: number
  supportPercentage: number
  opposePercentage: number
  neutralPercentage: number
}

export function ReportDetailsModal({ reportId, children, onActionTaken }: ReportDetailsModalProps) {
  const [open, setOpen] = useState(false)
  const [report, setReport] = useState<ReportDetails | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [consultation, setConsultation] = useState<PublicConsultation | null>(null)
  const [loading, setLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)
  const { toast } = useToast()

  const fetchReportDetails = async () => {
    if (!open) return
    
    setLoading(true)
    try {
      // Fetch report details
      const reportResponse = await fetch(`/api/reports/${reportId}`)
      if (reportResponse.ok) {
        const reportData = await reportResponse.json()
        setReport(reportData.report)
      }

      // Fetch consultation data if public voting is enabled
      const consultationResponse = await fetch(`/api/consultations/by-report/${reportId}`)
      if (consultationResponse.ok) {
        const consultationData = await consultationResponse.json()
        setConsultation(consultationData.consultation)
        setComments(consultationData.comments || [])
      }
    } catch (error) {
      console.error('Error fetching report details:', error)
      toast({
        title: "Error",
        description: "Failed to load report details",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReportDetails()
  }, [open, reportId])

  const handleEscalateToWard = async () => {
    setActionLoading(true)
    try {
      const response = await fetch(`/api/reports/${reportId}/escalate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'ESCALATE_TO_WARD',
          votesFor: report?.votesFor || 0,
          votesAgainst: report?.votesAgainst || 0,
          supportPercentage: consultation?.supportPercentage || 0
        })
      })

      if (response.ok) {
        toast({
          title: "Case Escalated",
          description: "This case has been escalated to ward administrators with all voting data and community feedback.",
        })
        onActionTaken?.()
        setOpen(false)
      } else {
        throw new Error('Failed to escalate case')
      }
    } catch (error) {
      toast({
        title: "Escalation Failed",
        description: "Failed to escalate case to ward administrators.",
        variant: "destructive",
      })
    } finally {
      setActionLoading(false)
    }
  }

  const handleScheduleMeeting = async () => {
    setActionLoading(true)
    try {
      const response = await fetch(`/api/reports/${reportId}/schedule-meeting`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supportPercentage: consultation?.supportPercentage || 0,
          totalVotes: (report?.votesFor || 0) + (report?.votesAgainst || 0)
        })
      })

      if (response.ok) {
        toast({
          title: "Meeting Scheduled",
          description: "A community meeting has been scheduled to discuss this case further.",
        })
        fetchReportDetails() // Refresh data
      } else {
        throw new Error('Failed to schedule meeting')
      }
    } catch (error) {
      toast({
        title: "Meeting Scheduling Failed",
        description: "Failed to schedule community meeting.",
        variant: "destructive",
      })
    } finally {
      setActionLoading(false)
    }
  }

  const getActionRecommendation = () => {
    if (!report || !consultation) return null

    const totalVotes = report.votesFor + report.votesAgainst
    const supportPercentage = consultation.supportPercentage

    if (totalVotes < 10) {
      return {
        type: 'warning',
        title: 'Insufficient Community Input',
        description: 'More community participation needed before action can be taken.',
        action: null
      }
    }

    if (supportPercentage >= 70) {
      return {
        type: 'escalate',
        title: 'Strong Community Support',
        description: `${supportPercentage}% community support. Recommended for immediate escalation to ward administrators.`,
        action: 'ESCALATE'
      }
    }

    if (supportPercentage >= 50) {
      return {
        type: 'meeting',
        title: 'Moderate Support',
        description: `${supportPercentage}% support. Consider scheduling a community meeting for further discussion.`,
        action: 'MEETING'
      }
    }

    return {
      type: 'review',
      title: 'Mixed Community Response',
      description: `Only ${supportPercentage}% support. Case requires additional review and clarification.`,
      action: 'REVIEW'
    }
  }

  const recommendation = getActionRecommendation()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-white border shadow-2xl">
        <DialogHeader className="border-b border-gray-200 pb-4 bg-white">
          <DialogTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900">
            <FileText className="h-6 w-6 text-blue-600" />
            Report Details & Community Response
          </DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center p-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading report details...</p>
            </div>
          </div>
        ) : report ? (
          <div className="space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="voting" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Voting
                </TabsTrigger>
                <TabsTrigger value="comments" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Comments
                </TabsTrigger>
                <TabsTrigger value="actions" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Actions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card className="border shadow-md bg-white">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                    <CardTitle className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900">{report.title}</h2>
                      <div className="flex gap-2">
                        <Badge className={`${report.priority === 'HIGH' ? 'bg-red-100 text-red-800 border-red-200' : 
                          report.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                          'bg-green-100 text-green-800 border-green-200'} px-3 py-1 font-medium`}>
                          {report.priority}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-200 px-3 py-1 font-medium">
                          {report.status.replace('_', ' ')}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                          <p className="text-gray-700 leading-relaxed">{report.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                              <User className="h-4 w-4" />
                              <span className="text-sm font-medium">Reported by</span>
                            </div>
                            <p className="font-semibold">{report.reporter}</p>
                          </div>
                          
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm font-medium">Date</span>
                            </div>
                            <p className="font-semibold">{new Date(report.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 text-blue-700 mb-2">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">Location</span>
                          </div>
                          <p className="text-blue-800 text-sm">{report.address}</p>
                          <div className="flex items-center gap-2 text-blue-600 text-xs mt-1">
                            <span>Lat: {report.latitude}</span>
                            <span>•</span>
                            <span>Lng: {report.longitude}</span>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <div className="flex items-center gap-2 text-purple-700 mb-2">
                            <AlertTriangle className="h-4 w-4" />
                            <span className="font-medium">Type</span>
                          </div>
                          <p className="text-purple-800">{report.type.replace('_', ' ')}</p>
                        </div>
                      </div>
                    </div>

                    {report.infringedLaws.length > 0 && (
                      <div className="bg-white p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium mb-3 flex items-center gap-2 text-gray-900">
                          <Scale className="h-4 w-4" />
                          Legal Analysis
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {report.infringedLaws.map((law, index) => (
                            <li key={index}>{law}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {report.images.length > 0 && (
                      <div className="bg-white p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium mb-3 flex items-center gap-2 text-gray-900">
                          <Camera className="h-4 w-4" />
                          Evidence Photos
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {report.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Evidence ${index + 1}`}
                              className="w-full h-24 object-cover rounded border"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="voting" className="space-y-4">
                {report.publicVotingEnabled && consultation ? (
                  <Card className="bg-white border shadow-md">
                    <CardHeader className="bg-white">
                      <CardTitle className="flex items-center gap-2 text-gray-900">
                        <Vote className="h-5 w-5" />
                        Community Voting Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 bg-white">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{report.votesFor}</div>
                          <div className="text-sm text-green-700">Support</div>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg">
                          <div className="text-2xl font-bold text-red-600">{report.votesAgainst}</div>
                          <div className="text-sm text-red-700">Oppose</div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            {report.votesFor + report.votesAgainst}
                          </div>
                          <div className="text-sm text-blue-700">Total Votes</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Support</span>
                          <span>{consultation.supportPercentage}%</span>
                        </div>
                        <Progress value={consultation.supportPercentage} className="h-2" />
                        
                        <div className="flex justify-between text-sm">
                          <span>Opposition</span>
                          <span>{consultation.opposePercentage}%</span>
                        </div>
                        <Progress value={consultation.opposePercentage} className="h-2 bg-red-100" />
                        
                        <div className="flex justify-between text-sm">
                          <span>Neutral</span>
                          <span>{consultation.neutralPercentage}%</span>
                        </div>
                        <Progress value={consultation.neutralPercentage} className="h-2 bg-gray-100" />
                      </div>

                      {report.votingDeadline && (
                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                          <Clock className="h-4 w-4 inline mr-2" />
                          Voting ends: {new Date(report.votingDeadline).toLocaleDateString()}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-white border shadow-md">
                    <CardContent className="text-center py-8 bg-white">
                      <Vote className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Public voting not enabled for this report</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="comments" className="space-y-4">
                <Card className="bg-white border shadow-md">
                  <CardHeader className="bg-white">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <MessageSquare className="h-5 w-5" />
                      Community Comments ({comments.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white">
                    {comments.length > 0 ? (
                      <div className="space-y-4 max-h-60 overflow-y-auto">
                        {comments.map((comment) => (
                          <div key={comment.id} className="border-l-4 pl-4 py-2 border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback className="text-xs">
                                    {comment.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="font-medium text-sm">{comment.author}</span>
                                <Badge variant="outline" className={`text-xs ${
                                  comment.support === 'FOR' ? 'border-green-500 text-green-700' :
                                  comment.support === 'AGAINST' ? 'border-red-500 text-red-700' :
                                  'border-gray-500 text-gray-700'
                                }`}>
                                  {comment.support}
                                </Badge>
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(comment.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700">{comment.content}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No comments yet</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="actions" className="mt-6 space-y-4">
                <Card className="border shadow-md bg-white">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Government Actions & Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-white space-y-6">
                    {/* Always show basic actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button 
                        variant="outline"
                        onClick={() => window.open(`https://maps.google.com/?q=${report.latitude},${report.longitude}`, '_blank')}
                        className="flex items-center justify-center gap-2 h-12 bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Location on Map
                      </Button>
                      
                      <Button 
                        variant="outline"
                        onClick={() => {
                          const reportData = `Report: ${report.title}\nDescription: ${report.description}\nLocation: ${report.address}\nType: ${report.type}\nPriority: ${report.priority}`
                          navigator.clipboard.writeText(reportData)
                          toast({ title: "Report copied to clipboard" })
                        }}
                        className="flex items-center justify-center gap-2 h-12 bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                      >
                        <FileText className="h-4 w-4" />
                        Copy Report Details
                      </Button>
                    </div>

                    {/* Report status actions */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Status Management</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                        >
                          <Clock className="h-4 w-4 mr-2" />
                          In Review
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100"
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Investigation
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Resolved
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Rejected
                        </Button>
                      </div>
                    </div>

                    {/* Community-based recommendations if consultation exists */}
                    {recommendation ? (
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">AI Recommendation</h3>
                        <div className={`p-4 rounded-lg border-l-4 ${
                          recommendation.type === 'escalate' ? 'bg-green-50 border-green-500' :
                          recommendation.type === 'meeting' ? 'bg-yellow-50 border-yellow-500' :
                          recommendation.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                          'bg-blue-50 border-blue-500'
                        }`}>
                          <h4 className="font-medium mb-2">{recommendation.title}</h4>
                          <p className="text-sm text-gray-700 mb-4">{recommendation.description}</p>

                          <div className="flex gap-3">
                            {recommendation.action === 'ESCALATE' && (
                              <Button 
                                onClick={handleEscalateToWard}
                                disabled={actionLoading}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <Gavel className="h-4 w-4 mr-2" />
                                Escalate to Ward
                              </Button>
                            )}
                            
                            {recommendation.action === 'MEETING' && (
                              <Button 
                                onClick={handleScheduleMeeting}
                                disabled={actionLoading}
                                className="bg-yellow-600 hover:bg-yellow-700"
                              >
                                <Users className="h-4 w-4 mr-2" />
                                Schedule Meeting
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Standard Actions</h3>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-blue-800 text-sm mb-3">
                            This report has not yet generated community consultation data. You can take the following actions:
                          </p>
                          <div className="flex gap-3">
                            <Button 
                              onClick={handleEscalateToWard}
                              disabled={actionLoading}
                              className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                            >
                              <Gavel className="h-4 w-4 mr-2" />
                              Escalate to Ward
                            </Button>
                            <Button 
                              onClick={handleScheduleMeeting}
                              disabled={actionLoading}
                              className="bg-purple-600 hover:bg-purple-700 text-white border-0"
                            >
                              <Users className="h-4 w-4 mr-2" />
                              Schedule Meeting
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Meeting status */}
                    {report.meetingScheduled && (
                      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="flex items-center gap-2 text-emerald-700 mb-2">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-medium">Community Meeting Scheduled</span>
                        </div>
                        {report.meetingDate && (
                          <p className="text-sm text-emerald-600">
                            Scheduled Date: {new Date(report.meetingDate).toLocaleDateString()} at {new Date(report.meetingDate).toLocaleTimeString()}
                          </p>
                        )}
                        <p className="text-xs text-emerald-600 mt-1">
                          Community members will be notified of this meeting through the platform.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="text-center py-8">
            <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Failed to load report details</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}