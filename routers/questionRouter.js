import Router from "express";
import { getQuestions } from "../controllers/questionController.js";

const questionRouter = Router();
questionRouter.get("/questions", getQuestions);

export default questionRouter;