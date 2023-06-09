import { Router } from "express";
import { getUserInfoVisit , getUserAboutVisit , getUserPostsVisit , getUserProfileCover } from "../controllers/visitUserControllers.js";

const router = new Router();

router.post("/v1/api/u/user/info/visit/:id", getUserInfoVisit);
router.post("/v1/api/u/user/about/visit/:id", getUserAboutVisit);
router.post("/v1/api/u/user/post/visit/:id", getUserPostsVisit);
router.post("/v1/api/u/user/profileCover/visit/:id", getUserProfileCover);

export default router;