import { Router } from "express";
import { getPost , uploadPost , getAllPosts , likePost , unLikePost , checkIfLiked , commentPost } from "../controllers/postsControllers.js";

const router = new Router();

router.get("/v1/api/u/post", getPost);
router.post("/v1/api/upload/post", uploadPost);
router.get("/v1/api/home/posts", getAllPosts);
router.put("/v1/api/u/post/like", likePost);
router.put("/v1/api/u/post/unLike", unLikePost);
router.get("/v1/api/u/post/checkIfLiked", checkIfLiked);
router.post("/v1/api/u/post/comment", commentPost);

export default router;