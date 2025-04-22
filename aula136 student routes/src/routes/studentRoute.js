import { Router } from "express";
const router = new Router();

import studentController from "../controllers/StudentController";

router.get("/", studentController.index);
router.post("/create/", studentController.create);

export default router;
