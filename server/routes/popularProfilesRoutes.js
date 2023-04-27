import { Router } from "express";
import { getPopularProfiles } from "../controllers/popularProfilesControllers.js";
const router = new Router();

router.post("/v1/api/u/home/popular/profiles", getPopularProfiles);

export default router;