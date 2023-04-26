import { Router } from "express";
import { profileImage , coverImage } from "../controllers/profileCoverControllers.js";
const router = new Router();

router.post("/v1/api/u/user/info/image/profile", profileImage);
router.post("/v1/api/u/user/info/image/cover", coverImage);

export default router;