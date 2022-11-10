import { Request, Response } from "express";
import { Bet, BetEntity } from "../protocols/Bet.js";

import * as repositories from "../repositories/bets.repository.js";

async function postNewBet(req: Request, res: Response) {
  const { user_id, match_id, team1_score, team2_score } = req.body as Bet;

  try {
    await repositories.createBet(user_id, match_id, team1_score, team2_score);
    return res.status(201).send({ message: "Bet registered." });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

async function deleteBet(req: Request, res: Response) {
  const id = Number(req.params.id);

  try {
    await repositories.deleteBet(id);
    return res.status(201).send({ message: "Bet deleted." });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

async function updateBet(req: Request, res: Response) {
  const updated_bet = req.body as BetEntity;

  try {
    await repositories.upsertBet(updated_bet);
    return res.status(201).send({ message: "Bet updated." });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

export { postNewBet, deleteBet, updateBet };
