import { Router } from "express";
import { SignupController } from "../controllers/SignupController";
import verifyUserExist from "../middleware/verifyIfUserExist";

const SignupRoutes = Router();

SignupRoutes.post("/signup", verifyUserExist, SignupController);

export default SignupRoutes;
