import { Router } from "express";
import controllerStandings from "../controllers/standings.controller";

const router = Router();


router.get("/", controllerStandings);

export default router;
