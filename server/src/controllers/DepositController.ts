import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface IDepositData {
    amount: number;
    toAccountId: string;
}

const DepositController = async (request: Request, response: Response) => {
    const { userAccount } = response.locals;
    const { amount }: IDepositData = request.body;

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

export default DepositController;
