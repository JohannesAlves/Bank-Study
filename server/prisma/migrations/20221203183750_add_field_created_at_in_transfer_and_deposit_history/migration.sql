-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DepositHistory" (
    "idDeposit" TEXT NOT NULL PRIMARY KEY,
    "toAccountId" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DepositHistory_toAccountId_fkey" FOREIGN KEY ("toAccountId") REFERENCES "Account" ("accountId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DepositHistory" ("amount", "idDeposit", "toAccountId") SELECT "amount", "idDeposit", "toAccountId" FROM "DepositHistory";
DROP TABLE "DepositHistory";
ALTER TABLE "new_DepositHistory" RENAME TO "DepositHistory";
CREATE UNIQUE INDEX "DepositHistory_idDeposit_key" ON "DepositHistory"("idDeposit");
CREATE TABLE "new_Transfer" (
    "idTransfer" TEXT NOT NULL PRIMARY KEY,
    "fromAccountId" TEXT NOT NULL,
    "toAccountId" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Transfer_fromAccountId_fkey" FOREIGN KEY ("fromAccountId") REFERENCES "Account" ("accountId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transfer" ("amount", "fromAccountId", "idTransfer", "toAccountId") SELECT "amount", "fromAccountId", "idTransfer", "toAccountId" FROM "Transfer";
DROP TABLE "Transfer";
ALTER TABLE "new_Transfer" RENAME TO "Transfer";
CREATE UNIQUE INDEX "Transfer_idTransfer_key" ON "Transfer"("idTransfer");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
