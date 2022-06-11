import db from "../../db/index.js";



export async function listarURLs(req , res){
    
    try{
        const totalCliques = await somarCliques();

        const solicitarLista = await db.query(`
        SELECT 
            "urlsEncurtadas".id, 
            usuarios.nome ,
            "urlsEncurtadas"."urlEncurtada" as "shortUrl", 
            "urlsEncurtadas"."urlOriginal" as "url", 
            "urlsEncurtadas"."numeroCliques" as "visitCount"
        FROM "urlsEncurtadas" 
        JOIN usuarios
        ON usuarios.id =  "usuarioId"
        WHERE usuarios.id = $1 AND token = $2
        ` , [req.params.id , res.locals.token]);

        if(solicitarLista.rows.length === 0){
            res.sendStatus(401);
        }else{
            let resposta = {
                id: solicitarLista.rows[0].id,
                name: solicitarLista.rows[0].nome,
                visitCount: totalCliques,
                shortenedUrls: [...solicitarLista.rows]
            }

            res.status(200).send(resposta);
        }

    }catch(err){
        res.sendStatus(404);
    }

    async function somarCliques(){
        const totalCliques = await db.query(`
            SELECT SUM("urlsEncurtadas"."numeroCliques") 
            FROM usuarios 
            JOIN "urlsEncurtadas"
            ON usuarios.id =  "usuarioId"
        `);

        return totalCliques.rows[0].sum;
    }
    
}