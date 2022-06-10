import {Router} from "express";
import { encurtarURL } from "../../controllers/encurtarURL.js";
import { autenticarToken } from "../../middlewares/autenticarToken.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten" , autenticarToken , encurtarURL);
urlsRouter.get("/urls/:id");
urlsRouter.get("/urls/open/:shortUrl");
urlsRouter.delete("/urls/:id");

export default urlsRouter;