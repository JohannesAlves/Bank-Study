import { Router } from "express";
import { SignupController } from "../controllers/SignupController";

const SignupRoutes = Router();

SignupRoutes.post("/signup", SignupController);

export default SignupRoutes;
