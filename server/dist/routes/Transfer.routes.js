"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TransferController_1 = require("../controllers/TransferController");
const auth_1 = require("../middleware/auth");
const getUserAccount_1 = __importDefault(require("../middleware/getUserAccount"));
const verifyBalanceAccount_1 = require("../middleware/verifyBalanceAccount");
const TransferRoutes = (0, express_1.Router)();
TransferRoutes.post("/transfer", auth_1.auth, getUserAccount_1.default, verifyBalanceAccount_1.verifyBalanceAccount, TransferController_1.TransferController);
exports.default = TransferRoutes;
