import { TeamEntry } from '../types';
import pool from './pool';

const BASE_URL = 'https://site.api.espn.com/apis/v2/sports/basketball/nba';


async function fetchData() {
    try {
        const response = await fetch(`${BASE_URL}/standings`)
        if (!response.ok) {
            throw new Error(`Something went wrong: ${response.status}`)
        }

        const data = await response.json();
        return {
            east: data.children[0].standings.entries,
            west: data.children[1].standings.entries
        }
    } catch (err) {
        console.error(err)
    }
}

async function insertTeam(entry: TeamEntry, conference: string) {
    const teamName = entry.team.displayName;
    const logo = entry.team.logos[1].href;
    const wins = entry.stats.find(s => s.name === 'wins')?.value;
    const losses = entry.stats.find(l => l.name === 'losses')?.value;
    const ppg = entry.stats.find(p => p.name === 'avgPointsFor')?.value;
    const oppPpg = entry.stats.find(o => o.name === 'avgPointsAgainst')?.value;
    const diff = entry.stats.find(d => d.name === 'differential')?.value;

    const sql = `INSERT INTO standings (team_name, logo, conference, wins, losses, ppg, opp_ppg, diff)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (team_name) DO UPDATE SET
        wins = EXCLUDED.wins,
        losses = EXCLUDED.losses,
        ppg = EXCLUDED.ppg,
        opp_ppg = EXCLUDED.opp_ppg,
        diff = EXCLUDED.diff,
        updated_at = NOW()`

    await pool.query(sql, [teamName, logo, conference, wins, losses, ppg, oppPpg, diff])
}