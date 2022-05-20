import db from "../config/db.js";

export async function getQuestions(req, res){
    const { dificulty } = req.query;
    
    try{
        if(dificulty){
            const questions = await db.collection("questions").find({dificulty}).toArray();
        }else{
            const questions = await db.collection("questions").find({}).toArray(); 
        }
        return res.status(200).send(questions);
    }catch(e){
        return res.status(500).send("Error on GET /questions", e);
    }
}
