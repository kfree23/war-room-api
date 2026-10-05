import pool from "../db/pool";

async function getAllStandingsOrderedByWins() {
    const result = await pool.query(`SELECT * FROM standings ORDER BY wins DESC`);

    return result.rows;
}

export default getAllStandingsOrderedByWins;