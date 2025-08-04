import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { LandingPage } from "@/components/landing-page"

export default async function Home() {
  const session = await getServerSession(authOptions) as {
    user?: {
      role?: string
    }
  } | null

  if (session && session.user && session.user.role) {
    if (session.user.role === "ADMIN") {
      redirect("/dashboard/admin")
    } else if (session.user.role === "GOVERNMENT_OFFICIAL") {
      redirect("/dashboard/government")
    } else {
      redirect("/dashboard/resident")
    }
  }

  return <LandingPage />
}
