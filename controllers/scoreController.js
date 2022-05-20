import db from "./../config/db.js";
import joi from "joi";

export async function getScore(req, res) {
  try {
    const scoreCollection = await db.collection("scores");
    const scores = await scoreCollection.find({}).toArray();
    res.status(200).send(scores);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function postScore(req, res) {
  const schemaScore = joi.object({
    user: joi.string().required(),
    score: joi.number().required(),
  });
  const { error } = schemaScore.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(422).send(error.details.map((detail) => detail.message));
  }

  try {
    const scoreCollection = await db.collection("scores");
    await scoreCollection.insertOne(req.body);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
