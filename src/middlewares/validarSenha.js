import db from "../../db/index.js";
import bcrypt from "bcrypt";

export async function validarSenha(req , res , next){
    const {email , password} = req.body;
    try{
        const solicitarSenha = await db.query(`
        SELECT senha FROM usuarios
        WHERE email = $1;
    ` , [email]);
        
        if(bcrypt.compareSync(password , solicitarSenha.rows[0].senha)){
            next();
        }else{
            res.sendStatus(401);
        }
    }catch(err){
        res.sendStatus(401);
    }
}