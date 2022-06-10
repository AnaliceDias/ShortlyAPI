import {Router} from "express";
import { cadastrarUruario } from "../../controllers/signupControllers.js";
import { validarFormato } from "../../middlewares/validarFormatoCadastro.js";

const signupRouter = Router();

signupRouter.post("/signup" , validarFormato , cadastrarUruario);

export default signupRouter;