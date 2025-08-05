import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { ResidentDashboard } from "@/components/resident-dashboard"

import { Session } from "next-auth"

export const dynamic = 'force-dynamic'

export default async function ResidentDashboardPage() {
  const session: Session | null = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  // Allow admin users to access all dashboards
  // Only redirect government officials (not admins) and only if they're not explicitly accessing resident dashboard
  if (session.user.role === "GOVERNMENT_OFFICIAL") {
    redirect("/dashboard/government")
  }

  return <ResidentDashboard user={session.user} />
}
