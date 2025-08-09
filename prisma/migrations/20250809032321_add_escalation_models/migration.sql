-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ReportStatus" ADD VALUE 'ESCALATED';
ALTER TYPE "ReportStatus" ADD VALUE 'UNDER_REVIEW';

-- AlterTable
ALTER TABLE "ConsultationComment" ADD COLUMN     "vote" TEXT;

-- CreateTable
CREATE TABLE "ReportEscalation" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "escalatedBy" TEXT NOT NULL,
    "escalationType" TEXT NOT NULL,
    "escalationLevel" TEXT NOT NULL,
    "votingData" JSONB,
    "escalationReason" TEXT NOT NULL,
    "escalatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "priority" TEXT NOT NULL DEFAULT 'HIGH',
    "resolvedAt" TIMESTAMP(3),
    "resolvedBy" TEXT,
    "resolution" TEXT,

    CONSTRAINT "ReportEscalation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportActivity" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReportActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityMeeting" (
    "id" TEXT NOT NULL,
    "reportId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scheduledDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "meetingType" TEXT NOT NULL,
    "agenda" TEXT[],
    "minutes" TEXT,
    "attendees" TEXT[],
    "outcomes" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunityMeeting_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReportEscalation" ADD CONSTRAINT "ReportEscalation_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportEscalation" ADD CONSTRAINT "ReportEscalation_escalatedBy_fkey" FOREIGN KEY ("escalatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportEscalation" ADD CONSTRAINT "ReportEscalation_resolvedBy_fkey" FOREIGN KEY ("resolvedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportActivity" ADD CONSTRAINT "ReportActivity_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportActivity" ADD CONSTRAINT "ReportActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMeeting" ADD CONSTRAINT "CommunityMeeting_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMeeting" ADD CONSTRAINT "CommunityMeeting_organizer_fkey" FOREIGN KEY ("organizer") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
