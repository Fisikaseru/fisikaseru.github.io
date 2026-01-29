-- Baseline migration for FisikaSeru national platform
CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT,
  "email" TEXT UNIQUE,
  "emailVerified" TIMESTAMP,
  "image" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "Account" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "type" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  "refresh_token" TEXT,
  "access_token" TEXT,
  "expires_at" INTEGER,
  "token_type" TEXT,
  "scope" TEXT,
  "id_token" TEXT,
  "session_state" TEXT,
  UNIQUE("provider", "providerAccountId")
);

CREATE INDEX "Account_userId_idx" ON "Account"("userId");

CREATE TABLE "Session" (
  "id" TEXT PRIMARY KEY,
  "sessionToken" TEXT NOT NULL UNIQUE,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "expires" TIMESTAMP NOT NULL
);

CREATE INDEX "Session_userId_idx" ON "Session"("userId");

CREATE TABLE "VerificationToken" (
  "identifier" TEXT NOT NULL,
  "token" TEXT NOT NULL UNIQUE,
  "expires" TIMESTAMP NOT NULL,
  UNIQUE("identifier", "token")
);

CREATE TABLE "Lab" (
  "id" TEXT PRIMARY KEY,
  "slug" TEXT NOT NULL UNIQUE,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "tags" TEXT[] NOT NULL,
  "coverImage" TEXT,
  "isPublished" BOOLEAN NOT NULL DEFAULT FALSE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "Lab_isPublished_idx" ON "Lab"("isPublished");

CREATE TABLE "Simulation" (
  "id" TEXT PRIMARY KEY,
  "labId" TEXT NOT NULL REFERENCES "Lab"("id") ON DELETE CASCADE,
  "slug" TEXT NOT NULL UNIQUE,
  "title" TEXT NOT NULL,
  "version" TEXT NOT NULL,
  "difficulty" TEXT NOT NULL,
  "prerequisites" TEXT[] NOT NULL,
  "isPublished" BOOLEAN NOT NULL DEFAULT FALSE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "Simulation_labId_idx" ON "Simulation"("labId");
CREATE INDEX "Simulation_isPublished_idx" ON "Simulation"("isPublished");

CREATE TABLE "DownloadEvent" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "simulationId" TEXT NOT NULL REFERENCES "Simulation"("id") ON DELETE CASCADE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "ipHash" TEXT NOT NULL,
  "userAgent" TEXT,
  "meta" JSONB NOT NULL
);

CREATE INDEX "DownloadEvent_simulationId_idx" ON "DownloadEvent"("simulationId");
CREATE INDEX "DownloadEvent_userId_idx" ON "DownloadEvent"("userId");
CREATE INDEX "DownloadEvent_createdAt_idx" ON "DownloadEvent"("createdAt");

CREATE TABLE "ReportArtifact" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "simulationId" TEXT NOT NULL REFERENCES "Simulation"("id") ON DELETE CASCADE,
  "sessionSnapshot" JSONB NOT NULL,
  "pdfUrl" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "ReportArtifact_simulationId_idx" ON "ReportArtifact"("simulationId");
CREATE INDEX "ReportArtifact_userId_idx" ON "ReportArtifact"("userId");
CREATE INDEX "ReportArtifact_createdAt_idx" ON "ReportArtifact"("createdAt");

CREATE TABLE "AuditLog" (
  "id" TEXT PRIMARY KEY,
  "actorUserId" TEXT REFERENCES "User"("id") ON DELETE SET NULL,
  "action" TEXT NOT NULL,
  "entityType" TEXT NOT NULL,
  "entityId" TEXT NOT NULL,
  "meta" JSONB NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "AuditLog_actorUserId_idx" ON "AuditLog"("actorUserId");
CREATE INDEX "AuditLog_createdAt_idx" ON "AuditLog"("createdAt");
