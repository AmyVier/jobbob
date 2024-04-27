-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "typesid" INTEGER,
    "description" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "title" TEXT,
    "location" TEXT,
    "typesid" INTEGER,
    "companiesid" INTEGER,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schools" (
    "id" SERIAL NOT NULL,
    "location" TEXT,
    "name" TEXT,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "skillsid" INTEGER,
    "skill" TEXT,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "typeid" INTEGER,
    "type" TEXT,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userjobs" (
    "id" SERIAL NOT NULL,
    "startdate" DATE,
    "enddate" DATE,
    "jobsid" INTEGER,

    CONSTRAINT "userjobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "pronouns" TEXT,
    "bio" TEXT,
    "major" TEXT,
    "location" TEXT,
    "skillsid" INTEGER,
    "schoolid" INTEGER,
    "userjobsid" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
