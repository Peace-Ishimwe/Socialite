import { login_post, logout_get, signup_post } from "../controllers/authController.js";
import express  from "express";
const router = express.Router()

router.post('/v1/api/signup', signup_post)
router.post('/v1/api/login' , login_post)
router.get('/v1/api/logout' , logout_get)

export default router