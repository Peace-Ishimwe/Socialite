import aboutUserPost from "../controllers/aboutUserController.js";
import { Router } from "express";
import { getPost , uploadPost } from "../controllers/postsControllers.js";

const router = new Router();

router.post("/v1/api/aboutUser", aboutUserPost);
router.get("/v1/api/post", getPost);

export default router;  