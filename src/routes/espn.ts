import { Router } from 'express';

const router = Router();

router.get("/teams", async (req, res) => {
    try {
        const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams");

        if(!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json();
        res.json(data)

    } catch(err) {
        console.error(err)
        res.status(500).json({error: 'There is something wrong with your network.'})
    }
})


export default router;