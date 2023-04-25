import { Router } from "express";
import { followUserSuggested } from "../controllers/followController.js";

const router = new Router();

router.post("/v1/api/u/home/suggested/follow", followUserSuggested);

export default router;