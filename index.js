import express, { json } from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";
import scoreRouter from "./routers/scoreRouter.js";
import questionRouter from "./routers/questionRouter.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.use(scoreRouter);
app.use(questionRouter);

app.listen(process.env.PORT, () =>
  console.log(chalk.bold.green(`Server online on port ${process.env.PORT}!`))
);
