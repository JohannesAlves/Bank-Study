import { Router } from "express";
import LoginController from "../controllers/LoginController";
const LoginRoutes = Router();

LoginRoutes.post("/login", LoginController);

export default LoginRoutes;
