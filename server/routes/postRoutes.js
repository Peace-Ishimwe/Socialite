import { Router } from "express";
import { getPost , uploadPost , getAllPosts } from "../controllers/postsControllers.js";

const router = new Router();

router.get("/v1/api/u/post", getPost);
router.post("/v1/api/upload/post", uploadPost);
router.get("/v1/api/home/posts", getAllPosts);

export default router;