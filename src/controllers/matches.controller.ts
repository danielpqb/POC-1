import { Request, Response } from "express";
import { Match } from "../protocols/Match.js";

import * as repositories from "../repositories/matches.repository.js";

async function postNewMatch(req: Request, res: Response) {
  const { team1, team2 } = req.body as Match;

  try {
    await repositories.createMatch(team1, team2);
    return res.status(201).send({ message: "Match registered." });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

export { postNewMatch };
