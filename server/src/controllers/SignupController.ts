import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { isValidCPF } from "../utils/isValidCPF";

const prisma = new PrismaClient();

interface ISignupData {
    cpf: string;
    fullname: string;
}

const SignupController = async (request: Request, response: Response) => {
    const { cpf, fullname }: ISignupData = request.body;

    if (!cpf || !fullname) {
        response.status(401).json({ message: "U can't send data empty." });
        return;
    }

    const cpfWithoutMasks = cpf.replace(/[^\d]+/g, "");

    if (!isValidCPF(cpf)) {
        response.status(400).json({ message: "Invalid CPF!" });
        return;
    }

    try {
        const signupUser = await prisma.user.create({
            data: {
                cpf: cpfWithoutMasks,
                fullname,
            },
        });

        const createAccount = await prisma.account.create({
            data: {
                balance: 0,
                userId: signupUser.id,
            },
        });

        response.status(201).json({
            message: "Account Created Sucesfull!",
            data: { balance: createAccount.balance },
        });
    } catch (error) {
        console.log(error);
        response.status(400).json({ message: "Internal server errror." });
    }
};

export { SignupController };
