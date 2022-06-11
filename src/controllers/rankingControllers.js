import db from "../../db/index.js";

export async function rankear(req , res){
    try{

        const ranking = await db.query(`
        SELECT 
        usuarios.id,
        usuarios.nome as name,
        count("urlsEncurtadas"."urlEncurtada") as "linksCount", 
        sum("urlsEncurtadas"."numeroCliques") as "visitCount"
        FROM usuarios 
        JOIN "urlsEncurtadas"
        ON usuarios.id =  "usuarioId"
        GROUP BY   usuarios.id
        ORDER BY "visitCount" DESC
        LIMIT 10 
        `);

        res.status(200).send(ranking.rows);

    }catch(err){
        res.sendStatus(404);
    }
}