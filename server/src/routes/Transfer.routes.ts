import { Router } from "express";
import { GetTransfersController, TransferController } from "../controllers/TransferController";
import { auth } from "../middleware/auth";
import getUserAccount from "../middleware/getUserAccount";
import { verifyBalanceAccount } from "../middleware/verifyBalanceAccount";
const TransferRoutes = Router();

TransferRoutes.post("/transfer", auth, getUserAccount, verifyBalanceAccount, TransferController);
TransferRoutes.get("/transfer", auth, getUserAccount, GetTransfersController);

export default TransferRoutes;
