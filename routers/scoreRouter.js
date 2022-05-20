import { Router } from "express";

import { getScore, postScore } from "../controllers/scoreController.js";

const scoreRouter = Router();

scoreRouter.get("/score", getScore);
scoreRouter.post("/score", postScore);

export default scoreRouter;
