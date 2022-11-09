import express from "express";
import cors from "cors";

import usersRouter from "./routers/users.router.js";
import matchesRouter from "./routers/matches.router.js";
import betsRouter from "./routers/bets.router.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(usersRouter);
app.use(matchesRouter);
app.use(betsRouter);

export default app;
