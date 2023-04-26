import { Router } from "express";
import { followUserSuggested , checkIfollowing , unFollowUserSuggested } from "../controllers/followController.js";

const router = new Router();

router.post("/v1/api/u/home/suggested/follow", followUserSuggested);
router.post("/v1/api/u/home/suggested/unfollow", unFollowUserSuggested);
router.post("/v1/api/u/home/check/follow", checkIfollowing);

export default router;