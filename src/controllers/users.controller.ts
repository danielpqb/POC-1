import { Request, Response } from "express";
import { User } from "../protocols/User.js";
import { UserAccuracy } from "../protocols/UserAccuracy.js";

import * as repositories from "../repositories/users.repository.js";

async function postNewUser(req: Request, res: Response) {
  const { name } = req.body as User;

  try {
    const find_user = (await repositories.getUserByName(name)).rowCount;
    if (find_user > 0) {
      return res.status(409).send({ message: "Username already in use." });
    }

    await repositories.createUser(name);
    return res.status(201).send({ message: "User registered." });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

async function getTop10MostAccurateUsers(req: Request, res: Response) {
  try {
    const ranking: UserAccuracy[] = (
      await repositories.selectTop10MostAccurateUsers()
    ).rows;
    return res.status(201).send({ message: "Top 10 users.", ranking: ranking });
  } catch (error) {
    console.error(error);
    6;
    return res.sendStatus(500);
  }
}

export { postNewUser, getTop10MostAccurateUsers };
