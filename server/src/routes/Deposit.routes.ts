import { Router } from "express";
import DepositController from "../controllers/DepositController";
import { auth } from "../middleware/auth";
import { verifyIfAccountExist } from "../middleware/verifyIfAccountExist";

const DepositRoutes = Router();

DepositRoutes.post("/deposit", auth, verifyIfAccountExist, DepositController);

export default DepositRoutes;
