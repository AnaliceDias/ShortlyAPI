import { criarNovaUrlSchema } from "../schemas/index.js";

export function validarFormato(req, res , next){
    const validacao = criarNovaUrlSchema.validate(req.body);

    if(validacao.error){
        res.sendStatus(422);
    }else{
        next();
    }
}