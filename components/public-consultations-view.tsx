"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Minus, 
  Clock, 
  MapPin, 
  Users, 
  AlertTriangle,
  Send,
  Calendar,
  TrendingUp
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Consultation {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  daysRemaining: number
  coordinates: { latitude: number; longitude: number } | null
  totalVotes: number
  supportVotes: number
  opposeVotes: number
  neutralVotes: number
  supportPercentage: number
  opposePercentage: number
  neutralPercentage: number
  userHasVoted: boolean
  userVote: string | null
  totalComments: number
  recentComments: Array<{
    id: string
    content: string
    author: string
    createdAt: string
    isOwnComment: boolean
  }>
  isActive: boolean
  isExpiringSoon: boolean
}

export function PublicConsultationsView() {
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [selectedConsultation, setSelectedConsultation] = useState<string | null>(null)
  const [newComment, setNewComment] = useState("")
  const [selectedVote, setSelectedVote] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchConsultations()
  }, [])

  const fetchConsultations = async () => {
    try {
      const response = await fetch('/api/consultations/public')
      if (response.ok) {
        const data = await response.json()
        setConsultations(data.consultations)
      } else {
        throw new Error('Failed to fetch consultations')
      }
    } catch (error) {
      console.error('Error fetching consultations:', error)
      toast({
        title: "Error",
        description: "Failed to load public consultations",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const submitVote = async (consultationId: string, vote: string) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/consultations/public', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          consultationId,
          type: 'vote',
          vote
        })
      })

      if (response.ok) {
        toast({
          title: "Vote submitted",
          description: "Your vote has been recorded successfully",
        })
        await fetchConsultations() // Refresh data
        setSelectedVote("")
      } else {
        throw new Error('Failed to submit vote')
      }
    } catch (error) {
      console.error('Error submitting vote:', error)
      toast({
        title: "Error",
        description: "Failed to submit your vote",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitComment = async (consultationId: string) => {
    if (!newComment.trim()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/consultations/public', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          consultationId,
          type: 'comment',
          comment: newComment.trim()
        })
      })

      if (response.ok) {
        toast({
          title: "Comment submitted",
          description: "Your comment has been added successfully",
        })
        setNewComment("")
        await fetchConsultations() // Refresh data
      } else {
        throw new Error('Failed to submit comment')
      }
    } catch (error) {
      console.error('Error submitting comment:', error)
      toast({
        title: "Error",
        description: "Failed to submit your comment",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatDescription = (description: string) => {
    // Split description into sections and format appropriately
    const sections = description.split('\n').filter(line => line.trim())
    
    return sections.map((section, index) => {
      if (section.startsWith('**') && section.endsWith('**')) {
        // Headers
        return `<h4 class="font-semibold text-gray-900 mt-4 mb-2 text-base">${section.replace(/\*\*/g, '')}</h4>`
      } else if (section.startsWith('•')) {
        // List items
        return `<li class="text-gray-700 ml-4 mb-1">${section.substring(2)}</li>`
      } else if (section.trim()) {
        // Regular paragraphs
        return `<p class="text-gray-700 mb-3 leading-relaxed">${section}</p>`
      }
      return ''
    }).join('')
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading public consultations...</p>
        </div>
      </div>
    )
  }

  if (consultations.length === 0) {
    return (
      <div className="text-center py-12">
        <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Consultations</h3>
        <p className="text-gray-600">
          There are currently no public consultations requiring community input.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Active Public Consultations</h2>
        <p className="text-gray-600">
          Participate in community decision-making by voting and sharing your thoughts on important issues.
        </p>
      </div>

      {/* Consultations List */}
      <div className="space-y-6">
        {consultations.map((consultation) => (
          <Card key={consultation.id} className="overflow-hidden bg-white border border-gray-200 shadow-sm">
            <CardHeader className="pb-4 bg-white border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 flex items-center gap-2 text-gray-900">
                    {consultation.isExpiringSoon && (
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                    )}
                    {consultation.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Ends {formatDate(consultation.endDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {consultation.daysRemaining} days remaining
                    </div>
                    {consultation.coordinates && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Location specified
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {consultation.isExpiringSoon && (
                    <Badge variant="destructive">Expires Soon</Badge>
                  )}
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                    {consultation.totalVotes} votes • {consultation.totalComments} comments
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 bg-white p-6">{/* Description */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div 
                  className="text-sm text-gray-800 leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: formatDescription(consultation.description) }}
                />
              </div>

              {/* Voting Results */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Community Sentiment ({consultation.totalVotes} votes)
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-green-600" />
                      Support
                    </div>
                    <span className="font-medium">{consultation.supportPercentage}% ({consultation.supportVotes})</span>
                  </div>
                  <Progress value={consultation.supportPercentage} className="h-2 bg-gray-200">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500 ease-in-out"
                      style={{ width: `${consultation.supportPercentage}%` }}
                    />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <ThumbsDown className="h-4 w-4 text-red-600" />
                      Oppose
                    </div>
                    <span className="font-medium">{consultation.opposePercentage}% ({consultation.opposeVotes})</span>
                  </div>
                  <Progress value={consultation.opposePercentage} className="h-2 bg-gray-200">
                    <div 
                      className="h-full bg-red-500 transition-all duration-500 ease-in-out"
                      style={{ width: `${consultation.opposePercentage}%` }}
                    />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Minus className="h-4 w-4 text-gray-600" />
                      Neutral
                    </div>
                    <span className="font-medium">{consultation.neutralPercentage}% ({consultation.neutralVotes})</span>
                  </div>
                  <Progress value={consultation.neutralPercentage} className="h-2 bg-gray-200">
                    <div 
                      className="h-full bg-gray-500 transition-all duration-500 ease-in-out"
                      style={{ width: `${consultation.neutralPercentage}%` }}
                    />
                  </Progress>
                </div>
              </div>

              {/* Voting Section */}
              {consultation.isActive && (
                <div className="border-t pt-6 bg-white">
                  {consultation.userHasVoted ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800">
                        <ThumbsUp className="h-4 w-4" />
                        You voted: <strong>{consultation.userVote}</strong>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        You can change your vote by selecting a different option below.
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800 font-medium mb-2">Your voice matters - cast your vote!</p>
                      <p className="text-sm text-blue-700">
                        Help the community and authorities understand public sentiment on this issue.
                      </p>
                    </div>
                  )}

                  <div className="mt-4">
                    <RadioGroup
                      value={selectedVote}
                      onValueChange={setSelectedVote}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-green-50 transition-colors border-gray-200 hover:border-green-300 bg-white">
                        <RadioGroupItem value="SUPPORT" id={`support-${consultation.id}`} className="text-green-600" />
                        <Label 
                          htmlFor={`support-${consultation.id}`} 
                          className="flex-1 cursor-pointer flex items-center gap-2 font-medium text-green-700"
                        >
                          <ThumbsUp className="h-4 w-4" />
                          Support - I agree with the proposed action
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-red-50 transition-colors border-gray-200 hover:border-red-300 bg-white">
                        <RadioGroupItem value="OPPOSE" id={`oppose-${consultation.id}`} className="text-red-600" />
                        <Label 
                          htmlFor={`oppose-${consultation.id}`} 
                          className="flex-1 cursor-pointer flex items-center gap-2 font-medium text-red-700"
                        >
                          <ThumbsDown className="h-4 w-4" />
                          Oppose - I disagree with the proposed action
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-gray-50 transition-colors border-gray-200 hover:border-gray-300 bg-white">
                        <RadioGroupItem value="NEUTRAL" id={`neutral-${consultation.id}`} className="text-gray-600" />
                        <Label 
                          htmlFor={`neutral-${consultation.id}`} 
                          className="flex-1 cursor-pointer flex items-center gap-2 font-medium text-gray-700"
                        >
                          <Minus className="h-4 w-4" />
                          Neutral - I need more information or have no strong opinion
                        </Label>
                      </div>
                    </RadioGroup>

                    {selectedVote && (
                      <Button
                        onClick={() => submitVote(consultation.id, selectedVote)}
                        disabled={isSubmitting}
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      >
                        {isSubmitting ? "Submitting..." : `Submit ${selectedVote.toLowerCase()} vote`}
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Comments Section */}
              <div className="border-t pt-6 bg-white">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Community Comments ({consultation.totalComments})
                </h4>

                {/* Add Comment */}
                {consultation.isActive && (
                  <div className="mb-6 space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Textarea
                      placeholder="Share your thoughts, concerns, or suggestions about this issue..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[100px] bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-blue-500"
                      maxLength={1000}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {newComment.length}/1000 characters
                      </span>
                      <Button
                        onClick={() => submitComment(consultation.id)}
                        disabled={!newComment.trim() || isSubmitting}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Post Comment
                      </Button>
                    </div>
                  </div>
                )}

                {/* Recent Comments */}
                {consultation.recentComments.length > 0 && (
                  <div className="space-y-3">
                    {consultation.recentComments.map((comment) => (
                      <div 
                        key={comment.id} 
                        className={`p-4 rounded-lg border ${
                          comment.isOwnComment ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900">
                            {comment.isOwnComment ? 'You' : comment.author}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatDate(comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-800 leading-relaxed">{comment.content}</p>
                      </div>
                    ))}
                    
                    {consultation.totalComments > consultation.recentComments.length && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        onClick={() => setSelectedConsultation(
                          selectedConsultation === consultation.id ? null : consultation.id
                        )}
                      >
                        {selectedConsultation === consultation.id ? 'Show Less' : 
                         `View ${consultation.totalComments - consultation.recentComments.length} more comments`}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PublicConsultationsView
