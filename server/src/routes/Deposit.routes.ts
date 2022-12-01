import { Router } from "express";
import DepositController from "../controllers/DepositController";
import { verifyIfAccountExist } from "../middleware/verifyIfAccountExist";

const DepositRoutes = Router();

DepositRoutes.post("/deposit", verifyIfAccountExist, DepositController);

export default DepositRoutes;
