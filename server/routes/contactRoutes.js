import { contactUs } from "../controllers/contactUsController.js";
import { Router } from "express";

const router = new Router();

router.post("/v1/api/contact/us", contactUs); 

export default router;