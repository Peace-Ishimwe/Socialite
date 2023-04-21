import { Router } from "express";
import { getPost , uploadPost } from "../controllers/postsControllers.js";

const router = new Router();

router.get("/v1/api/post", getPost);
router.post("/v1/api/upload/post", uploadPost);

export default router;