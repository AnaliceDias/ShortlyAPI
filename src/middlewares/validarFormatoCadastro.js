import { signupSchema } from "../schemas/index.js";

export function validarFormato(req , res , next){
    const {password , confirmPassword} = req.body;
    const validacao = signupSchema.validate(req.body, { abortEarly: false });
    
    if(validacao.error){
        res.status(422).send(validacao.error.details);
    }
    else if(password !== confirmPassword){
        res.status(422).send("'Password' deve ser igual a 'confirmPassword'");
    }else{
        next();
    } 
}