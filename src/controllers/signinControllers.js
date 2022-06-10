import db from "../../db/index.js"

export async function conectarUsuario(req, res){
    const token = res.locals.token;
    const {email} = req.body;

    try{

        const guardarToken = db.query(`
        UPDATE usuarios SET token='${token}' WHERE email = $1`
        , [email]);
        
        res.status(200).send({
            "Authorization": `Bearer ${token}`
        });

    }catch(err){
        res.sendStatus(404);
    }

}