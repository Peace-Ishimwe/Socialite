import { Router } from "express";
import { likePost , unLikePost , checkIfLiked } from "../controllers/postsControllers.js";

const router = new Router();

router.put("/v1/api/u/post/like", likePost);
router.put("/v1/api/u/post/unLike", unLikePost);
router.get("/v1/api/u/post/checkIfLiked", checkIfLiked);

export default router;