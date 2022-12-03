import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserAccount = async (response: Response, request: Request, next: NextFunction) => {
    const { user } = response.locals;

    try {
        const getAccount = await prisma.account.findUnique({
            where: {
                userId: user,
            },
        });

        if (getAccount) {
            response.locals.userAccount = getAccount;
            next();
        } else {
            return response.status(404).json({ message: "Account not found." });
        }
    } catch {
        return response.status(500).json({ message: "Internal server error in get account data." });
    }
};
