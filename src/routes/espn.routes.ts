import { Router } from 'express';
import { controllerTeams, controllerSingleTeam } from '../controllers/espn.controller';

const router = Router();

router.get("/teams", controllerTeams)

router.get("/teams/:teamId/roster", controllerSingleTeam)

router.get("/athletes/:athleteId", async (req, res) => {
    try {
        const { athleteId } = req.params;
        const response = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${athleteId}`)

        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json()
        res.json(data.athlete)
    } catch(err) {
        console.error(err)
        res.status(500).json({error: "Failed to fetch."})
    }
})


export default router;