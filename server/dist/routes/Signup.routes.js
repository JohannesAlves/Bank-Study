"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SignupController_1 = require("../controllers/SignupController");
const verifyIfUserExist_1 = __importDefault(require("../middleware/verifyIfUserExist"));
const SignupRoutes = (0, express_1.Router)();
SignupRoutes.post("/signup", verifyIfUserExist_1.default, SignupController_1.SignupController);
exports.default = SignupRoutes;
