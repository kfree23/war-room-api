import pool from './pool';


async function migrate() {
    const sql = `CREATE TABLE IF NOT EXISTS standings(
    id          SERIAL PRIMARY KEY,
    logo        TEXT,
    team_name   VARCHAR(100) UNIQUE,
    conference  VARCHAR(10),
    wins        INTEGER,
    losses      INTEGER,
    ppg         NUMERIC(5, 2),
    opp_ppg     NUMERIC(5, 2),
    diff        NUMERIC(5, 2),
    updated_at  TIMESTAMP DEFAULT NOW()
);`

    try {
        await pool.query(sql)
    } catch (err) {
        console.error(err)
    } finally {
        pool.end()
    }
    console.log('Migration complete')
}

migrate();