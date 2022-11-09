import express from "express";

import { postNewMatch } from "../controllers/matches.controller.js";

const router = express.Router();

router.post("/matches/new", postNewMatch);

export default router;
