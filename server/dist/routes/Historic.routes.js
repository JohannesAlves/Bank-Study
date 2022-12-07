"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HistoricController_1 = require("../controllers/HistoricController");
const auth_1 = require("../middleware/auth");
const getUserAccount_1 = __importDefault(require("../middleware/getUserAccount"));
const HistoricRoutes = (0, express_1.Router)();
HistoricRoutes.get("/historic", auth_1.auth, getUserAccount_1.default, HistoricController_1.HistoricController);
exports.default = HistoricRoutes;
