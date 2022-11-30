import { Router } from "express";
import LoginRoutes from "./Login.routes";
import SignupRoutes from "./Signup.routes";

const routes = Router();

routes.use("/", SignupRoutes);
routes.use("/", LoginRoutes);

export default routes;
