import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { AdminPanel } from "@/components/admin-panel"

import { Session } from "next-auth"

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions) as Session | null

  if (!session) {
    redirect("/auth/signin")
  }

  if (session.user?.role !== "ADMIN") {
    redirect("/dashboard/resident")
  }

  return <AdminPanel user={session.user} />
}
