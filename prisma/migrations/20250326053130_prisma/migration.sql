-- CreateTable
CREATE TABLE "Prospects" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectType" TEXT NOT NULL,
    "projectBrief" TEXT NOT NULL,

    CONSTRAINT "Prospects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leads" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prospects_email_key" ON "Prospects"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Leads_email_key" ON "Leads"("email");
