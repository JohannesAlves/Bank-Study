"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const DepositController = async (request, response) => {
    const { userAccount } = response.locals;
    const { amount } = request.body;
    if (typeof amount === "string") {
        return response.status(400).json({ message: "u can't send string." });
    }
    if (!amount) {
        return response.status(400).json({ deposit: false, message: "U can't send data empty" });
    }
    if (amount <= 0) {
        return response.status(406).json({ deposit: false, message: "Deposits can't be negative." });
    }
    if (amount > 2000) {
        return response.status(406).json({ deposit: false, message: "Deposit's can't be more than $2000" });
    }
    const deposit = await prisma.depositHistory.create({
        data: {
            amount,
            toAccountId: userAccount.accountId,
        },
    });
    const depositInAccount = await prisma.account.update({
        where: {
            accountId: userAccount.accountId,
        },
        data: {
            balance: {
                increment: deposit.amount,
            },
        },
    });
    return response.status(200).json({ deposit: true, message: "Deposit sucessful!", data: {} });
};
exports.default = DepositController;
