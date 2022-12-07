"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BalanceController_1 = __importDefault(require("../controllers/BalanceController"));
const auth_1 = require("../middleware/auth");
const BalanceRoutes = (0, express_1.Router)();
BalanceRoutes.get("/balance", auth_1.auth, BalanceController_1.default);
exports.default = BalanceRoutes;
