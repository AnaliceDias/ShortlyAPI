import bcrypt from "bcrypt";

export default function criptografarSenha(senha){
    let senhaCriptografada = bcrypt.hashSync(senha , 10);
    return senhaCriptografada
}