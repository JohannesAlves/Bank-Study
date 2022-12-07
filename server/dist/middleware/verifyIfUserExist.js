"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const isValidCPF_1 = require("../utils/isValidCPF");
const prisma = new client_1.PrismaClient();
async function verifyUserExist(request, response, next) {
    const { cpf } = request.body;
    if (!cpf) {
        return response.status(400).json({ message: "U can't send empty cpf." });
    }
    if (!(0, isValidCPF_1.isValidCPF)(cpf)) {
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
        }
        else {
            next();
        }
    }
    catch (error) {
        return response.status(400).json({ message: "Internal server error in try to signup." });
    }
}
exports.default = verifyUserExist;
