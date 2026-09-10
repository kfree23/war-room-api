import { Router } from 'express';

const router = Router();

router.get("/teams", async (req, res) => {
    try {
        const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams");

        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json();
        res.json(data.sports[0].leagues[0].teams)

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch.' })
    }
})

router.get("/teams/:teamId/roster", async (req, res) => {
    try {
        const { teamId } = req.params;
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamId}/roster`);

        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }

        const data = await response.json()
        res.json(data.athletes)
    } catch(err) {
        console.error(err)
        res.status(500).json({error: "Failed to fetch."})
    }
})

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