import { updateUserInfo } from "../controllers/updateUserControllers.js";
import { Router } from "express";
const router = new Router();

router.post("/v1/api/u/user/info/update", updateUserInfo);

export default router;