"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isValidCPF_1 = require("../utils/isValidCPF");
const prisma = new client_1.PrismaClient();
const LoginController = async (request, response) => {
    const { cpf } = request.body;
    if (!(0, isValidCPF_1.isValidCPF)(cpf)) {
        return response.status(403).json({ message: "Invalid CPF!" });
    }
    const cpfWithoutMasks = cpf.replace(/[^\d]+/g, "");
    const user = await prisma.user.findUnique({
        where: {
            cpf: cpfWithoutMasks,
        },
    });
    if (!user) {
        response.status(404).json({ message: "User not found." });
        return;
    }
    else {
        const token = jsonwebtoken_1.default.sign({ user: user.id }, "SECRET_KEY", {
            expiresIn: "2 days",
        });
        return response.status(200).json({ userId: user.id, token, fullname: user.fullname });
    }
};
exports.default = LoginController;
