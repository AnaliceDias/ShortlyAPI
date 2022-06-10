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