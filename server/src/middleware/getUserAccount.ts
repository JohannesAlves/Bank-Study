import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserAccount = async (response: Response, request: Request, next: NextFunction) => {
    const { user } = response.locals;

    const getAccount = await prisma.account.findUnique({
        where: {
            userId: user,
        },
        select: {
            accountId: true,
        },
    });

    response.locals.userAccount = getAccount;

    if (!getAccount) {
        return response.status(404).json({ message: "Account not found." });
    }

    next();
};

export default getUserAccount;
