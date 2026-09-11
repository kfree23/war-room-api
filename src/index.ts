import express from "express";
import standingsRouter from "./routes/standings";
import scoutingRouter from "./routes/scouting";
import espnRouter from "./routes/espn";
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;


app.use(express.json())
app.use(cors());
app.use("/api/nba/standings", standingsRouter);
app.use("/api/scouting", scoutingRouter)
app.use("/api/espn", espnRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))
