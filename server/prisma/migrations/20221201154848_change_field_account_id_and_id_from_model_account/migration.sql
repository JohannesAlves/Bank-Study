/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `accountNumber` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `idAccount` on the `Account` table. All the data in the column will be lost.
  - The required column `accountId` was added to the `Account` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transfer" (
    "idTransfer" TEXT NOT NULL PRIMARY KEY,
    "fromAccountId" TEXT NOT NULL,
    "toAccountId" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    CONSTRAINT "Transfer_fromAccountId_fkey" FOREIGN KEY ("fromAccountId") REFERENCES "Account" ("accountId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transfer" ("amount", "fromAccountId", "idTransfer", "toAccountId") SELECT "amount", "fromAccountId", "idTransfer", "toAccountId" FROM "Transfer";
DROP TABLE "Transfer";
ALTER TABLE "new_Transfer" RENAME TO "Transfer";
CREATE UNIQUE INDEX "Transfer_idTransfer_key" ON "Transfer"("idTransfer");
CREATE UNIQUE INDEX "Transfer_fromAccountId_key" ON "Transfer"("fromAccountId");
CREATE UNIQUE INDEX "Transfer_toAccountId_key" ON "Transfer"("toAccountId");
CREATE TABLE "new_Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accountId" TEXT NOT NULL,
    "balance" DECIMAL NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Account" ("balance", "userId") SELECT "balance", "userId" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_id_key" ON "Account"("id");
CREATE UNIQUE INDEX "Account_accountId_key" ON "Account"("accountId");
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
