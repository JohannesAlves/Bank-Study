"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const TransferController = async (request, response) => {
    const { toAccountId, amount } = request.body;
    if (!toAccountId || !amount) {
        return response.status(406).json({ message: "U can't send data empty to transfer." });
    }
    if (amount <= 0) {
        return response.status(406).json({ message: "Transfer's can't be negative." });
    }
    if (amount > 2000) {
        return response.status(406).json({ deposit: false, message: "Transfer's can't be more than $2000" });
    }
    try {
        const { userAccount } = response.locals;
        if (!userAccount) {
            return response.status(404).json({ message: "Account not found." });
        }
        const transfer = await prisma.transfer.create({
            data: {
                fromAccountId: userAccount.accountId,
                toAccountId,
                amount,
            },
        });
        if (!transfer) {
            return response.status(500).json({ message: "Transfer fail." });
        }
        // verify if it's a good pratic.
        const removeBalanceAmount = await prisma.account.update({
            where: {
                accountId: transfer.fromAccountId,
            },
            data: {
                balance: {
                    decrement: transfer.amount,
                },
            },
        });
        const updateBalanceAccount = await prisma.account.update({
            where: {
                accountId: transfer.toAccountId,
            },
            data: {
                balance: {
                    increment: transfer.amount,
                },
            },
        });
        return response.status(202).json({
            transfer: true,
            message: "Transfer with sucessful!",
            data: {
                idTransfer: transfer.idTransfer,
                fromAccountId: transfer.fromAccountId,
                toAccountId: transfer.toAccountId,
                amount: transfer.amount,
            },
        });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal server error when try transfer amount." });
    }
};
exports.TransferController = TransferController;
