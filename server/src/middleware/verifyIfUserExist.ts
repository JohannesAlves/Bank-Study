import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { isValidCPF } from "../utils/isValidCPF";

const prisma = new PrismaClient();

async function verifyUserExist(request: Request, response: Response, next: NextFunction) {
    const { cpf } = request.body;

    if (!cpf) {
        return response.status(400).json({ message: "U can't send empty cpf." });
    }

    if (!isValidCPF(cpf)) {
        response.status(400).json({ message: "Invalid CPF!" });
        return;
    }

    try {
        const verifyIfUserExist = await prisma.user.findUnique({
            where: {
                cpf,
            },
        });

        if (verifyIfUserExist) {
            return response.status(403).json({ message: "User already exist u can't signup." });
        } else {
            next();
        }
    } catch (error) {
        return response.status(400).json({ message: "Internal server error in try to signup." });
    }
}

export default verifyUserExist;
