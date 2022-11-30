import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { isValidCPF } from "../utils/isValidCPF";

const prisma = new PrismaClient();

interface ILoginData {
    cpf: string;
}

const LoginController = async (request: Request, response: Response) => {
    const { cpf }: ILoginData = request.body;

    if (!isValidCPF(cpf)) {
        return response.status(403).json({ message: "Invalid CPF!" });
    }

    const user = await prisma.user.findUnique({
        where: {
            cpf,
        },
    });

    if (!user) {
        response.status(404).json({ message: "User not found." });
        return;
    } else {
        const token = jwt.sign({ user: user.id }, "SECRET_KEY", {
            expiresIn: "2 days",
        });

        return response.status(200).json({ userId: user.id, token });
    }
};

export default LoginController;
