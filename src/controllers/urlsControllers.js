import  {  nanoid  }  from 'nanoid';
import db from '../../db/index.js';

export async function encurtarURL(req, res){
    const token = res.locals.token;
    const usuarioId = res.locals.usuarioId;
    const urlOriginal = req.body.url;
    const urlCurta = nanoid(10);
    
    try{
        const guardarURL = db.query(`
            INSERT INTO "urlsEncurtadas" ("usuarioId" , "urlOriginal" , "urlEncurtada")
            VALUES (${usuarioId} , '${urlOriginal}' , '${urlCurta}')
        `);
        res.status(201).send(
            {
                "shortUrl": urlCurta
            }
        );
    }catch(err){
        res.sendStatus(404);
    }
}

export async function buscarURL(req , res){
    const idUrlEncurtada = req.params.id;
    
    try{
        const buscarUrlEncurtada = await db.query(`
            SELECT id , "urlEncurtada" , "urlOriginal" 
            FROM "urlsEncurtadas"
            WHERE id = $1
        `, [idUrlEncurtada]);

        const {id , urlEncurtada, urlOriginal} = buscarUrlEncurtada.rows[0]

        res.status(200).send({   
            id: id,
            shortUrl: urlEncurtada,
            url: urlOriginal
        });
        
    }catch(err){
        res.sendStatus(404);
    }
}

export async function redirecionarUruario(req , res){
    
    try{
        const urlEncurtada = await db.query(`
            SELECT "urlOriginal"
            FROM "urlsEncurtadas"
            WHERE "urlEncurtada"=$1
        `, [req.params.shortUrl]);
        
        const URL = urlEncurtada.rows[0].urlOriginal;

        res.redirect(URL);

        res.sendStatus(200);

    }catch(err){
        res.sendStatus(404);
    }
}

export async function verificarPropriedade(req , res , next){
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const UrlId = req.params.id;
    
    try{
        const solicitarToken = await db.query(`
        SELECT usuarios.token FROM "urlsEncurtadas" as "URLs"
        JOIN usuarios
        ON usuarios.id =  "usuarioId"
        WHERE "URLs".id = $1
        `, [UrlId]);

        if(solicitarToken.rows[0].token === token){
            res.status(401).send("Você não é o proprietário dessa URL e por isso não pode apagá-la");
        }else{
            next();
        }

    }catch(err){
        res.sendStatus(404);
    }
}

export async function deletarUrl(req , res){
    const UrlId = req.params.id;
    
    try{
        const apagarURL = await db.query(`
            DELETE FROM "urlsEncurtadas" WHERE id = $1
            `, [UrlId]);
            
            res.sendStatus(204);
    }catch(err){
        res.sendStatus(404);
    }
}