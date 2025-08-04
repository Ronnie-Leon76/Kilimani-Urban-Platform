import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { ResidentDashboard } from "@/components/resident-dashboard"

import { Session } from "next-auth"

export default async function ResidentDashboardPage() {
  const session: Session | null = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  if (session.user.role === "GOVERNMENT_OFFICIAL" || session.user.role === "ADMIN") {
    redirect("/dashboard/government")
  }

  return <ResidentDashboard user={session.user} />
}
