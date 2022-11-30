import { Router } from "express";
import SignupRoutes from "./Signup.routes";

const routes = Router();

routes.use("/", SignupRoutes);

export default routes;
