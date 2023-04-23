import { Router } from "express";
import { likePost , unlikePost } from "../controllers/postsControllers.js";

const router = new Router();

router.get("api/v1/u/post/like", likePost);
router.post("api/v1/u/post/unlike", unlikePost);

export default router;