import express from "express";

import { postNewUser } from "../controllers/users.controller.js";

const router = express.Router();

router.post("/users/new", postNewUser);

export default router;
