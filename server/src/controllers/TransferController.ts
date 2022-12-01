import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface ITransferData {
    fromAccountId: string;
    toAccountId: string;
    amount: number;
}

const TransferController = async (request: Request, response: Response) => {
    const { fromAccountId, toAccountId, amount }: ITransferData = request.body;

    if (!fromAccountId || !toAccountId || !amount) {
        return response.status(406).json({ message: "U can't send data empty to transfer." });
    }

    if (amount <= 0) {
        return response.status(406).json({ message: "Transfer's can't be negative." });
    }

    if (amount > 2000) {
        return response.status(406).json({ deposit: false, message: "Transfer's can't be more than $2000" });
    }

    try {
        const transfer = await prisma.transfer.create({
            data: {
                fromAccountId,
                toAccountId,
                amount,
            },
        });

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
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal server error when try transfer amount." });
    }
};

export default TransferController;
