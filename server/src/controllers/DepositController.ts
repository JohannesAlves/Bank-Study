import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface IDepositData {
    amount: number;
    toAccountId: string;
}

const DepositController = async (request: Request, response: Response) => {
    const { amount, toAccountId }: IDepositData = request.body;

    if (!amount || !toAccountId) {
        return response.status(400).json({ deposit: false, message: "U can't send data empty" });
    }

    const deposit = await prisma.depositHistory.create({
        data: {
            amount,
            toAccountId,
        },
    });

    const depositInAccount = await prisma.account.update({
        where: {
            accountId: toAccountId,
        },
        data: {
            balance: {
                increment: deposit.amount,
            },
        },
    });

    return response.status(200).json({ deposit: true, message: "Deposit sucessful!", data: {} });
};

export default DepositController;
