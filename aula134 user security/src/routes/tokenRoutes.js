import { Router } from "express";
const router = new Router();

import tokenController from "../controllers/TokenController";

router.post("/", tokenController.create);

export default router;
