import express from "express";
import standingsRouter from "./routes/standings";
import cors from 'cors';

const app = express();
const port = process.env.PORT;


app.use(express.json())
app.use(cors());
app.use("/api/nba/standings", standingsRouter);

app.listen(port, () => console.log(`Server running on port ${port}`))
