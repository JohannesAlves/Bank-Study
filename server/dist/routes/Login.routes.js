"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const LoginRoutes = (0, express_1.Router)();
LoginRoutes.post("/login", LoginController_1.default);
exports.default = LoginRoutes;
