"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const HistoricController = async (request, response) => {
    const { userAccount } = response.locals;
    try {
        const transfersUser = await prisma.transfer.findMany({
            where: {
                fromAccountId: userAccount.accountId,
            },
            select: {
                amount: true,
                idTransfer: true,
                createdAt: true,
            },
        });
        const depositsUser = await prisma.depositHistory.findMany({
            where: {
                toAccountId: userAccount.accountId,
            },
            select: {
                amount: true,
                idDeposit: true,
                createdAt: true,
            },
        });
        return response.status(200).json({ transfersUser, depositsUser });
    }
    catch {
        return response.status(500).json({ message: "Internal server error to get transfers" });
    }
};
exports.HistoricController = HistoricController;
