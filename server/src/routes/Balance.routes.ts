import { Router } from "express";
import BalanceController from "../controllers/BalanceController";
import { auth } from "../middleware/auth";

const BalanceRoutes = Router();

BalanceRoutes.get("/balance", auth, BalanceController);

export default BalanceRoutes;
