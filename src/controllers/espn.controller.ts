import { getTeams, getRoster, getPlayer } from "../services/espn.services"
import { Request, Response } from "express";

async function controllerTeams(req: Request, res: Response) {
    try {
        const teamsData = await getTeams();
        res.json(teamsData)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch.' })
    }
}

async function controllerRoster(req: Request<{ teamId: string }>, res: Response) {
    try {
        const { teamId } = req.params;
        const team = await getRoster(teamId);
        res.json(team)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch." })
    }
}


async function controllerPlayer(req: Request<{ athleteId: string }>, res: Response) {
    try {
        const { athleteId } = req.params;
        const player = await getPlayer(athleteId);

        res.json(player)
    } catch(err) {
        res.status(500).json( {error: "Failed to fetch."} )
    }
}
export { controllerTeams, controllerRoster, controllerPlayer };