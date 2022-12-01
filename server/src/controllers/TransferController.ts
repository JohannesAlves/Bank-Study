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
                    decrement: amount,
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
            },
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal server error when try transfer amount." });
    }
};

export default TransferController;
