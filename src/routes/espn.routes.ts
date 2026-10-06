import { Router } from 'express';
import { controllerTeams, controllerRoster, controllerPlayer } from '../controllers/espn.controller';

const router = Router();

router.get("/teams", controllerTeams)

router.get("/teams/:teamId/roster", controllerRoster)

router.get("/athletes/:athleteId", controllerPlayer)


export default router;