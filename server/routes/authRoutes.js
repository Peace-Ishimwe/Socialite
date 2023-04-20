import { register, login } from "../controllers/authControllers.js";
import { checkUser } from "../middlewares/authMiddleware.js";
import aboutUserPost from "../controllers/aboutUserController.js";
import { Router } from "express";
import { getPost , uploadPost } from "../controllers/postsControllers.js";

const router = new Router();

router.post("/v1/api", checkUser); 
router.post("/v1/api/register", register);
router.post("/v1/api/login", login);
router.post("/v1/api/aboutUser", aboutUserPost);
router.get("/v1/api/post", getPost);
router.post("/v1/api/upload/post", uploadPost);

export default router;  