import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/index";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

interface IAccountData {
    fromAccountId: string;
    amount: Decimal;
}

async function verifyBalanceAccount(request: Request, response: Response, next: NextFunction) {
    const { user } = response.locals;
    const { amount }: IAccountData = request.body;

    const getAccount = await prisma.account.findUnique({
        where: {
            userId: user,
        },
        select: {
            accountId: true,
        },
    });

    if (!getAccount) {
        return response.status(404).json({ message: "Account not found." });
    }

    const account = await prisma.account.findUnique({
        where: {
            accountId: getAccount.accountId,
        },
    });

    if (!account) {
        return response.status(404).json({ transaction: false, message: "Account not found." });
    }

    if (account.balance < amount) {
        return response
            .status(406)
            .json({ transaction: false, message: "U don't have balance to make this transaction." });
    }

    next();
}

export { verifyBalanceAccount };
