import {Router} from "express";
import { buscarURL, deletarUrl, encurtarURL, redirecionarUruario, somarUmClique, verificarPropriedade } from "../../controllers/urlsControllers.js";
import { autenticarToken } from "../../middlewares/autenticarToken.js";
import { validarFormatoHeader } from "../../middlewares/validarFormatoHeaderDeAutenticacao.js";
import { validarFormato } from "../../middlewares/validarFormatoNovaUrl.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten" , validarFormatoHeader , validarFormato , autenticarToken , encurtarURL);
urlsRouter.get("/urls/:id" , buscarURL);
urlsRouter.get("/urls/open/:shortUrl" , somarUmClique, redirecionarUruario);
urlsRouter.delete("/urls/:id" , validarFormatoHeader , verificarPropriedade , deletarUrl);

export default urlsRouter;