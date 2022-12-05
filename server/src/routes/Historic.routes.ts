import { Router } from "express";
import { HistoricController } from "../controllers/HistoricController";
import { auth } from "../middleware/auth";
import getUserAccount from "../middleware/getUserAccount";
const HistoricRoutes = Router();

HistoricRoutes.get("/historic", auth, getUserAccount, HistoricController);

export default HistoricRoutes;
