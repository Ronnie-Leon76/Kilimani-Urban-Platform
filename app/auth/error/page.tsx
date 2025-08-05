import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export const dynamic = 'force-dynamic'

interface ErrorPageProps {
  searchParams: {
    error?: string
    callbackUrl?: string
  }
}

export default async function AuthErrorPage({ searchParams }: ErrorPageProps) {
  const session = await getServerSession(authOptions)
  
  // If user is already signed in, redirect them
  if (session) {
    redirect("/")
  }

  const { error, callbackUrl } = searchParams
  
  const getErrorMessage = (error: string) => {
    switch (error) {
      case "OAuthCallback":
        return {
          title: "Authentication Timeout",
          description: "The sign-in process took too long and timed out. This can happen due to network issues or temporary server problems.",
          solution: "Please try signing in again. If the problem persists, check your internet connection or try again later."
        }
      case "OAuthAccountNotLinked":
        return {
          title: "Account Not Linked",
          description: "This email is already associated with another account.",
          solution: "Please sign in with the account you used originally, or use a different email address."
        }
      case "AccessDenied":
        return {
          title: "Access Denied",
          description: "You denied access to your account information.",
          solution: "To continue, please allow access to your account when prompted."
        }
      default:
        return {
          title: "Authentication Error",
          description: "An unexpected error occurred during sign-in.",
          solution: "Please try signing in again. If the problem continues, contact support."
        }
    }
  }

  const errorInfo = getErrorMessage(error || "Unknown")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">
            {errorInfo.title}
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            {errorInfo.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              <strong>Solution:</strong> {errorInfo.solution}
            </p>
          </div>
          
          <div className="space-y-2">
            <Link href="/auth/signin" className="block">
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Signing In Again
              </Button>
            </Link>
            
            <Link href="/" className="block">
              <Button variant="outline" className="w-full">
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
          </div>
          
          {error && (
            <details className="mt-4">
              <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                Technical Details
              </summary>
              <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-mono text-gray-600">
                  Error Code: {error}
                </p>
                {callbackUrl && (
                  <p className="text-xs font-mono text-gray-600 mt-1">
                    Callback URL: {callbackUrl}
                  </p>
                )}
              </div>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
