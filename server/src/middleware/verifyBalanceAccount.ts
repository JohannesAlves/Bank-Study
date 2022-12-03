import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/index";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

interface IAccountData {
    fromAccountId: string;
    amount: Decimal;
}

async function verifyBalanceAccount(request: Request, response: Response, next: NextFunction) {
    const { userAccount } = response.locals;
    const { amount } = request.body;

    if (userAccount) {
        if (userAccount.balance < amount) {
            return response.status(406).json({ transaction: false, message: "Balance is not enough" });
        } else {
            next();
        }
    } else {
        return response.status(500).json({ message: "User account not found" });
    }
}

export { verifyBalanceAccount };
