import {v4 as uuid} from "uuid";

export function gerarToken(req, res , next){
    res.locals.token = uuid();
    next();
}