import { Router } from "express";
import TransferController from "../controllers/TransferController";
import { verifyBalanceAccount } from "../middleware/verifyBalanceAccount";
const TransferRoutes = Router();

TransferRoutes.post("/transfer", verifyBalanceAccount, TransferController);

export default TransferRoutes;
