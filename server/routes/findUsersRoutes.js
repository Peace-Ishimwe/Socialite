import { findUsers } from "../controllers/findUsersControllers.js";
import { Router } from "express";

const router = new Router();

router.post("/v1/api/u/home/suggested", findUsers);


export default router;