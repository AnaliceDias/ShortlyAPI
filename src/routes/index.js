import { Router } from "express";
import rankingRouter from "./ranking/index.js";
import signinRouter from "./signin/index.js";
import signupRouter from "./signup/index.js";
import urlsRouter from "./urls/index.js";
import usersRouter from "./users/index.js";

const router = Router();

router.use(signinRouter);
router.use(signupRouter);
router.use(urlsRouter);
router.use(usersRouter);
router.use(rankingRouter);

export default router;