import {Router} from "express";
import { listarURLs } from "../../controllers/usersControllers.js";
import { autenticarToken } from "../../middlewares/autenticarToken.js";

const usersRouter = Router();

usersRouter.get("/users/:id" , autenticarToken , listarURLs);

export default usersRouter;