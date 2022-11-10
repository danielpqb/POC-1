import express from "express";

import {
  deleteBet,
  postNewBet,
  updateBet,
} from "../controllers/bets.controller.js";

const router = express.Router();

router.post("/bets/new", postNewBet);
router.delete("/bets/delete/:id", deleteBet);
router.put("/bets/update", updateBet);

export default router;
