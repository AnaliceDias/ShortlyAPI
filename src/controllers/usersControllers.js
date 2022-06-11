import db from "../../db/index.js";

export async function listarURLs(req , res){
    
    try{
        const solicitarLista = await db.query(`
        SELECT * FROM usuarios
        WHERE id = $1 AND token = $2
        ` , [req.params.id , res.locals.token]);

        if(solicitarLista.rows.length === 0){
            res.sendStatus(401);
        }else{
            let resposta = {
                id: solicitarLista.rows[0].id,
                name: solicitarLista.rows[0].nome
            }

            

            res.sendStatus(200);
        }

    }catch(err){
        res.sendStatus(404);
    }
    
}