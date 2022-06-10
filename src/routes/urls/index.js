import {Router} from "express";
import { buscarURL, encurtarURL, redirecionarUruario } from "../../controllers/urlsControllers.js";
import { autenticarToken } from "../../middlewares/autenticarToken.js";
import { validarFormatoHeader } from "../../middlewares/validarFormatoHeaderDeAutenticacao.js";
import { validarFormato } from "../../middlewares/validarFormatoNovaUrl.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten" , validarFormatoHeader , validarFormato , autenticarToken , encurtarURL);
urlsRouter.get("/urls/:id" , buscarURL);
urlsRouter.get("/urls/open/:shortUrl" , redirecionarUruario);
urlsRouter.delete("/urls/:id");

export default urlsRouter;