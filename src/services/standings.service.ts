import getAllStandingsOrderedByWins from "../repositories/standings.repository";


async function getStandings() {
    const standings = await getAllStandingsOrderedByWins();
    return standings;
}

export default getStandings;