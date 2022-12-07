"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const BalanceController = async (request, response) => {
    const { user } = response.locals;
    try {
        const getBalance = await prisma.account.findUnique({
            where: {
                userId: user,
            },
            select: {
                balance: true,
                accountId: true,
            },
        });
        if (getBalance) {
            return response.status(200).json({ balance: getBalance.balance, accountId: getBalance.accountId });
        }
    }
    catch (errro) {
        return response.status(500).json({ message: "Internal server error to get balance." });
    }
};
exports.default = BalanceController;
