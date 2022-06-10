import db from "../../db/index.js"
import criptografarSenha from "../middlewares/criptografarSenha.js";

export async function cadastrarUruario(req, res){
        const {name , email , password} = req.body;

        let senha = criptografarSenha(password);
        try{
            const novoUsuario = await db.query(`
            INSERT INTO usuarios (nome, email , senha) VALUES ($1 , $2 , $3);
        `, [name , email , senha]);

        res.sendStatus(201);

        }catch(err){
            res.sendStatus(401);
        }
}