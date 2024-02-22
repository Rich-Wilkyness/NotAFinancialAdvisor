/*
  Warnings:

  - Made the column `income` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "income" SET NOT NULL,
ALTER COLUMN "income" SET DEFAULT 0;
