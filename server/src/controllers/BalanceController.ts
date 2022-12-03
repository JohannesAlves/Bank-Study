import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const BalanceController = async (request: Request, response: Response) => {
    const { user } = response.locals;

    try {
        const getBalance = await prisma.account.findUnique({
            where: {
                userId: user,
            },
            select: {
                balance: true,
            },
        });

        if (getBalance) {
            return response.status(200).json({ balance: getBalance.balance });
        }
    } catch (errro) {
        return response.status(500).json({ message: "Internal server error to get balance." });
    }
};

export default BalanceController;
