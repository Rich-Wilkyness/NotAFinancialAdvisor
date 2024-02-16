/*
  Warnings:

  - You are about to drop the `Expenses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_userId_fkey";

-- DropTable
DROP TABLE "Expenses";

-- CreateTable
CREATE TABLE "Expense" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "fixed" BOOLEAN NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
