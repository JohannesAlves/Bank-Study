import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/index";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

interface IVerifyData {
    toAccountId: string;
}

async function verifyIfAccountExist(request: Request, response: Response, next: NextFunction) {
    const { toAccountId }: IVerifyData = request.body;

    const middlewareVerifyAccount = await prisma.account.findUnique({
        where: {
            accountId: toAccountId,
        },
    });
}
