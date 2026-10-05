import getStandings from "../services/standings.service";
import { Request, Response } from "express";

async function controllerStandings(req: Request, res: Response) {
    try {
        const standings = await getStandings();
        res.json(standings)
    } catch(err) {
        res.status(500).json({ error: 'Failed to retrieve standings.'})
    }
}

export default controllerStandings;