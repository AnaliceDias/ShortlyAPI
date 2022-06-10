import {Router} from "express";

const usersRouter = Router();

usersRouter.get("/users/:id");

export default usersRouter;