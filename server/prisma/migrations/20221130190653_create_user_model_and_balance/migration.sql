-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "balanceId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_balanceId_fkey" FOREIGN KEY ("balanceId") REFERENCES "BalanceUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BalanceUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "balance" DECIMAL NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_balanceId_key" ON "User"("balanceId");

-- CreateIndex
CREATE UNIQUE INDEX "BalanceUser_id_key" ON "BalanceUser"("id");
