import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserAccount = async (request: Request, response: Response, next: NextFunction) => {
    const { user } = response.locals;

    if (!user) {
        return false;
    }

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

    if (getAccount) {
        response.locals.userAccount = getAccount.accountId;
        next();
    } else {
        return false;
    }
};

export default getUserAccount;
