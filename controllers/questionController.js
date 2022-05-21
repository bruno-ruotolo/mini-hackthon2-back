import db from "../config/db.js";

export async function getQuestions(req, res) {
  const { dificulty } = req.query;

  try {
    let questions;
    if (dificulty) {
      questions = await db
        .collection("questions")
        .find({ dificulty })
        .toArray();
    } else {
      questions = await db.collection("questions").find({}).toArray();
    }
    return res.status(200).send(questions);
  } catch (e) {
    return res.status(500).send("Error on GET /questions", e);
  }
}
