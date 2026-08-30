import { Router } from "express";
import pool from '../db/pool';

const router = Router();


router.get("/", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM standings ORDER BY wins DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'error' });
  }
});

export default router;
