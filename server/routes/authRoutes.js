import { register, login } from "../controllers/authControllers.js";
import { checkUser } from "../middlewares/authMiddleware.js";
import { Router } from "express";

const router = new Router();

router.post("/v1/api", checkUser); 
router.post("/v1/api/register", register);
router.post("/v1/api/login", login);

export default router;