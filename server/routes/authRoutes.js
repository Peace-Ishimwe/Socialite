import { register, login } from "../controllers/authControllers.js";
import { checkUser } from "../middlewares/authMiddleware.js";
import { Router } from "express";

const router = new Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);

export default router;