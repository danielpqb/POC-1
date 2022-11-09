import express from "express";

import {
  getTop10MostAccurateUsers,
  postNewUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/users/new", postNewUser);
router.get("/users/ranking", getTop10MostAccurateUsers);

export default router;
