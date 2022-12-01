import { Router } from "express";
import TransferController from "../controllers/TransferController";
import { verifyBalanceAccount } from "../middleware/verifyBalanceAccount";
import { verifyIfAccountExist } from "../middleware/verifyIfAccountExist";
const TransferRoutes = Router();

TransferRoutes.post("/transfer", verifyIfAccountExist, verifyBalanceAccount, TransferController);

export default TransferRoutes;
