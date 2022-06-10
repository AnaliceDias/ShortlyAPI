import { signinSchema } from "../schemas/index.js";

export function validarFormato(req, res , next){
    const validacao = signinSchema.validate(req.body);

    if(validacao.error){
        res.sendStatus(422);
    }else{
        next();
    }
}