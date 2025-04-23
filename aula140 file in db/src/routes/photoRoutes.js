import { Router } from "express";
const router = new Router();

import loginRequired from "../middlewares/loginRequired";

import photoController from "../controllers/PhotoController";

router.post("/", loginRequired, photoController.store);

export default router;
