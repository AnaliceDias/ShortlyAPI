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
    }catch(err){
        res.sendStatus(404);
    }
    
    res.send("OK")
}