import { Router } from "express";
import DepositRoutes from "./Deposit.routes";
import LoginRoutes from "./Login.routes";
import SignupRoutes from "./Signup.routes";
import TransferRoutes from "./Transfer.routes";

const routes = Router();

routes.use("/", SignupRoutes);
routes.use("/", LoginRoutes);
routes.use("/", TransferRoutes);
routes.use("/", DepositRoutes);

export default routes;
