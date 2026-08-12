import express from "express";
import standingsRouter from "./routes/standings";

const app = express();
const port = process.env.PORT;

// TODO(krystal): you write this
// - configure middleware (e.g. express.json(), cors, logging)

app.use("/api/nba/standings", standingsRouter);

// TODO(krystal): you write this
// - app.listen(...) and any startup logic
