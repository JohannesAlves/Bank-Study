import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

interface IAccountData {
    fromAccountId: string;
    amount: number;
}

async function verifyBalanceAccount(request: Request, response: Response, next: NextFunction) {
    const { fromAccountId, amount }: IAccountData = request.body;

    const verifyBalance = await prisma.account.findUnique({
        where: {
            accountNumber: fromAccountId,
        },
    });

    console.log(verifyBalance);
}

export { verifyBalanceAccount };
