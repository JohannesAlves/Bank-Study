"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUserAccount = async (request, response, next) => {
    const { user } = response.locals;
    if (!user) {
        return false;
    }
    const getAccount = await prisma.account.findUnique({
        where: {
            userId: user,
        },
    });
    if (!getAccount) {
        return response.status(404).json({ message: "Account not found." });
    }
    if (getAccount) {
        response.locals.userAccount = getAccount;
        next();
    }
    else {
        return false;
    }
};
exports.default = getUserAccount;
