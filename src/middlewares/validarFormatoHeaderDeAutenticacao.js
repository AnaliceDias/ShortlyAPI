import { authorizationHeaderSchema} from "../schemas/index.js";

export function validarFormatoHeader(req, res , next){
    const validacao = authorizationHeaderSchema.validate({
        authorization : req.headers.authorization
    });
    console.log({
        authorization : req.headers.authorization
    })

    if(validacao.error){
        res.sendStatus(422);
    }else{
        next();
    }
}