-- CreateTable
CREATE TABLE "DepositHistory" (
    "idDeposit" TEXT NOT NULL PRIMARY KEY,
    "toAccountId" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    CONSTRAINT "DepositHistory_toAccountId_fkey" FOREIGN KEY ("toAccountId") REFERENCES "Account" ("accountId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DepositHistory_idDeposit_key" ON "DepositHistory"("idDeposit");
