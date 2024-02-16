-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expenses" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "mortgage" INTEGER NOT NULL DEFAULT 0,
    "mortgageFixed" BOOLEAN NOT NULL DEFAULT false,
    "homeInsure" INTEGER NOT NULL DEFAULT 0,
    "homeInsureFixed" BOOLEAN NOT NULL DEFAULT false,
    "propertyTax" INTEGER NOT NULL DEFAULT 0,
    "propertyTaxFixed" BOOLEAN NOT NULL DEFAULT false,
    "hoa" INTEGER NOT NULL DEFAULT 0,
    "hoaFixed" BOOLEAN NOT NULL DEFAULT false,
    "utilities" INTEGER NOT NULL DEFAULT 0,
    "utilitiesFixed" BOOLEAN NOT NULL DEFAULT false,
    "car" INTEGER NOT NULL DEFAULT 0,
    "carFixed" BOOLEAN NOT NULL DEFAULT false,
    "autoInsure" INTEGER NOT NULL DEFAULT 0,
    "autoInsureFixed" BOOLEAN NOT NULL DEFAULT false,
    "fuel" INTEGER NOT NULL DEFAULT 0,
    "fuelFixed" BOOLEAN NOT NULL DEFAULT false,
    "health" INTEGER NOT NULL DEFAULT 0,
    "healthFixed" BOOLEAN NOT NULL DEFAULT false,
    "lifeInsure" INTEGER NOT NULL DEFAULT 0,
    "lifeInsureFixed" BOOLEAN NOT NULL DEFAULT false,
    "dental" INTEGER NOT NULL DEFAULT 0,
    "dentalFixed" BOOLEAN NOT NULL DEFAULT false,
    "eye" INTEGER NOT NULL DEFAULT 0,
    "eyeFixed" BOOLEAN NOT NULL DEFAULT false,
    "internet" INTEGER NOT NULL DEFAULT 0,
    "internetFixed" BOOLEAN NOT NULL DEFAULT false,
    "cable" INTEGER NOT NULL DEFAULT 0,
    "cableFixed" BOOLEAN NOT NULL DEFAULT false,
    "phone" INTEGER NOT NULL DEFAULT 0,
    "phoneFixed" BOOLEAN NOT NULL DEFAULT false,
    "subscriptions" INTEGER NOT NULL DEFAULT 0,
    "subscriptionsFixed" BOOLEAN NOT NULL DEFAULT false,
    "studentLoans" INTEGER NOT NULL DEFAULT 0,
    "studentLoansFixed" BOOLEAN NOT NULL DEFAULT false,
    "creditCard" INTEGER NOT NULL DEFAULT 0,
    "creditCardFixed" BOOLEAN NOT NULL DEFAULT false,
    "otherLoans" INTEGER NOT NULL DEFAULT 0,
    "otherLoansFixed" BOOLEAN NOT NULL DEFAULT false,
    "food" INTEGER NOT NULL DEFAULT 0,
    "foodFixed" BOOLEAN NOT NULL DEFAULT false,
    "clothing" INTEGER NOT NULL DEFAULT 0,
    "clothingFixed" BOOLEAN NOT NULL DEFAULT false,
    "childCare" INTEGER NOT NULL DEFAULT 0,
    "childCareFixed" BOOLEAN NOT NULL DEFAULT false,
    "childActivities" INTEGER NOT NULL DEFAULT 0,
    "childActivitiesFixed" BOOLEAN NOT NULL DEFAULT false,
    "childSupport" INTEGER NOT NULL DEFAULT 0,
    "childSupportFixed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "contribution" INTEGER NOT NULL,
    "currentContribution" INTEGER NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
