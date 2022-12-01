import { Router } from "express";
import LoginRoutes from "./Login.routes";
import SignupRoutes from "./Signup.routes";
import TransferRoutes from "./Transfer.routes";

const routes = Router();

routes.use("/", SignupRoutes);
routes.use("/", LoginRoutes);
routes.use("/", TransferRoutes);

export default routes;
