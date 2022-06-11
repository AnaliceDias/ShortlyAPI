import {Router} from "express";
import { autenticarToken } from "../../middlewares/autenticarToken.js";

const usersRouter = Router();

usersRouter.get("/users/:id" , autenticarToken);

export default usersRouter;