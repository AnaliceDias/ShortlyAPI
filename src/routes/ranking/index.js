import {Router} from "express";
import { rankear } from "../../controllers/rankingControllers.js";

const rankingRouter = Router();

rankingRouter.get("/ranking" , rankear);

export default rankingRouter;