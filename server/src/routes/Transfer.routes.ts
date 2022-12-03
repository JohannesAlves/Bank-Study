import { Router } from "express";
import TransferController from "../controllers/TransferController";
import { auth } from "../middleware/auth";
import getUserAccount from "../middleware/getUserAccount";
import { verifyBalanceAccount } from "../middleware/verifyBalanceAccount";
const TransferRoutes = Router();

TransferRoutes.post("/transfer", auth, getUserAccount, verifyBalanceAccount, TransferController);

export default TransferRoutes;
