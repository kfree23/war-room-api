import { getTeams, getTeam } from "../services/espn.services"
import { Request, Response } from "express";

async function controllerTeams(req: Request, res: Response) {
    try {
        const teamsData = await getTeams();
        res.json(teamsData)
    } catch(err) {
        res.status(500).json({ error: 'Failed to fetch.' })
    }
}

async function controllerSingleTeam(req: Request <{ teamId: string}>, res: Response) {
    try {
        const { teamId } = req.params;
        const team = await getTeam(teamId);
        res.json(team)
    } catch(err) {
        res.status(500).json({error: "Failed to fetch."})
    }
}

export { controllerTeams, controllerSingleTeam };