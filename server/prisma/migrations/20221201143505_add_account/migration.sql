/*
  Warnings:

  - You are about to drop the `BalanceUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "BalanceUser_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BalanceUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Account" (
    "idAccount" TEXT NOT NULL PRIMARY KEY,
    "accountNumber" TEXT NOT NULL,
    "balance" DECIMAL NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "balanceId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("balanceId", "cpf", "createdAt", "fullname", "id") SELECT "balanceId", "cpf", "createdAt", "fullname", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE UNIQUE INDEX "User_balanceId_key" ON "User"("balanceId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Account_idAccount_key" ON "Account"("idAccount");

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountNumber_key" ON "Account"("accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");
