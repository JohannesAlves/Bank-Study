import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const HistoricController = async (request: Request, response: Response) => {
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
    } catch {
        return response.status(500).json({ message: "Internal server error to get transfers" });
    }
};
