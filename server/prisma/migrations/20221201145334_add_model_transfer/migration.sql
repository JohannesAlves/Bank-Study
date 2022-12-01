-- CreateTable
CREATE TABLE "Transfer" (
    "idTransfer" TEXT NOT NULL PRIMARY KEY,
    "fromAccountId" TEXT NOT NULL,
    "toAccountId" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    CONSTRAINT "Transfer_fromAccountId_fkey" FOREIGN KEY ("fromAccountId") REFERENCES "Account" ("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_idTransfer_key" ON "Transfer"("idTransfer");

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_fromAccountId_key" ON "Transfer"("fromAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_toAccountId_key" ON "Transfer"("toAccountId");
