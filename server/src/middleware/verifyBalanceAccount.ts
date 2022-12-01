import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/index";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

interface IAccountData {
    fromAccountId: string;
    amount: Decimal;
}

async function verifyBalanceAccount(request: Request, response: Response, next: NextFunction) {
    const { fromAccountId, amount }: IAccountData = request.body;

    const account = await prisma.account.findUnique({
        where: {
            accountId: fromAccountId,
        },
    });

    if (!account) {
        return response.status(404).json({ transaction: false, message: "Account not found." });
    }

    if (account.balance < amount) {
        return response
            .status(406)
            .json({ transatcion: false, message: "U don't have balance to make this transaction." });
    }

    next();
}

export { verifyBalanceAccount };
