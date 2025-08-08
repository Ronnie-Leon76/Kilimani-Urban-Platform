"use client"

import { signIn, getSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function SignIn() {
  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/")
      }
    })
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <Card className="w-full max-w-md bg-white text-gray-900 shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-gray-900">Welcome to Kilimani Urban Intelligence</CardTitle>
          <CardDescription className="text-gray-600">Sign in to access the platform and contribute to better urban management</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
          >
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}