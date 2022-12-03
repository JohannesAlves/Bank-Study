import { Router } from "express";
import TransferController from "../controllers/TransferController";
import { auth } from "../middleware/auth";
import getUserAccount from "../middleware/getUserAccount";
import { verifyBalanceAccount } from "../middleware/verifyBalanceAccount";
import { verifyIfAccountExist } from "../middleware/verifyIfAccountExist";
const TransferRoutes = Router();

TransferRoutes.post("/transfer", auth, verifyIfAccountExist, verifyBalanceAccount, TransferController);

export default TransferRoutes;
