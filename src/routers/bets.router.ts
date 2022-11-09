import express from "express";

import { postNewBet } from "../controllers/bets.controller.js";

const router = express.Router();

router.post("/bets/new", postNewBet);

export default router;
