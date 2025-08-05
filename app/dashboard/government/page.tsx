import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { GovernmentDashboard } from "@/components/government-dashboard"

export const dynamic = 'force-dynamic'

export default async function GovernmentDashboardPage() {
  const session = await getServerSession(authOptions) as { user: { id: string; name?: string | null; email?: string | null; image?: string | null; role: string } } | null

  if (!session) {
    redirect("/auth/signin")
  }

  if (session.user.role !== "GOVERNMENT_OFFICIAL" && session.user.role !== "ADMIN") {
    redirect("/dashboard/resident")
  }

  return <GovernmentDashboard user={session.user} />
}