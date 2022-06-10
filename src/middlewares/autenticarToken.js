import db from "../../db/index.js";

export async function autenticarToken(req , res , next){
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    
    try{
        const pesquisarToken = await db.query(`
            SELECT id , token FROM usuarios WHERE token=$1;
        `, [token]);
        if(pesquisarToken.rows.length === 0){
            res.sendStatus(401);
        }else{
            res.locals.token = pesquisarToken.rows[0].token;
            res.locals.usuarioId = pesquisarToken.rows[0].id;
            next();
        }
                
    }catch(err){
        res.sendStatus(404);
    }

}