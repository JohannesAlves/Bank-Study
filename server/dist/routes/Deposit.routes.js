"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DepositController_1 = __importDefault(require("../controllers/DepositController"));
const auth_1 = require("../middleware/auth");
const getUserAccount_1 = __importDefault(require("../middleware/getUserAccount"));
const DepositRoutes = (0, express_1.Router)();
DepositRoutes.post("/deposit", auth_1.auth, getUserAccount_1.default, DepositController_1.default);
exports.default = DepositRoutes;
