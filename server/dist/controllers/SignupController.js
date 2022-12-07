"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupController = void 0;
const client_1 = require("@prisma/client");
const isValidCPF_1 = require("../utils/isValidCPF");
const prisma = new client_1.PrismaClient();
const SignupController = async (request, response) => {
    const { cpf, fullname } = request.body;
    if (!cpf || !fullname) {
        response.status(401).json({ message: "U can't send data empty." });
        return;
    }
    const cpfWithoutMasks = cpf.replace(/[^\d]+/g, "");
    if (!(0, isValidCPF_1.isValidCPF)(cpf)) {
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
    }
    catch (error) {
        console.log(error);
        response.status(400).json({ message: "Internal server errror." });
    }
};
exports.SignupController = SignupController;
