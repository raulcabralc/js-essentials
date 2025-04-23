import { Router } from "express";
const router = new Router();

import photoController from "../controllers/PhotoController";

router.post("/", photoController.store);

export default router;
