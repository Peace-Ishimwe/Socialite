import { Router } from "express";
import { commentPost } from "../controllers/postsControllers.js";

const router = new Router();

router.put("/v1/api/u/post/u/post/comment", commentPost);

export default router;