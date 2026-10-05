import getTeams from "../services/espn.services"
import { Request, Response } from "express";

async function controllerTeams(req: Request, res: Response) {
    try {
        const teamsData = await getTeams();
        res.json(teamsData)
    } catch(err) {
        res.status(500).json({ error: 'Failed to fetch.' })
    }
}

export default controllerTeams;