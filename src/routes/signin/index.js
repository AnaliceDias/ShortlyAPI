import {Router} from "express";
import { conectarUsuario } from "../../controllers/signinControllers.js";
import { gerarToken } from "../../middlewares/gerarTokenDeValidacao.js";
import { validarFormato } from "../../middlewares/validarFormatoSignin.js";
import { validarSenha } from "../../middlewares/validarSenha.js";

const signinRouter = Router();

signinRouter.post("/signin" , validarFormato , validarSenha , gerarToken , conectarUsuario);

export default signinRouter;