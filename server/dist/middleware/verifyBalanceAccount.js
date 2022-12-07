"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBalanceAccount = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function verifyBalanceAccount(request, response, next) {
    const { userAccount } = response.locals;
    const { amount } = request.body;
    if (userAccount) {
        if (userAccount.balance < amount) {
            return response.status(406).json({ transaction: false, message: "Balance is not enough" });
        }
        else {
            next();
        }
    }
    else {
        return response.status(500).json({ message: "User account not found" });
    }
}
exports.verifyBalanceAccount = verifyBalanceAccount;
