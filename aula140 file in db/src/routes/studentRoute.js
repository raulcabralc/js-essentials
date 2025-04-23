import { Router } from "express";
const router = new Router();

import loginRequired from "../middlewares/loginRequired";

import studentController from "../controllers/StudentController";

router.get("/", studentController.index);
router.post("/create/", loginRequired, studentController.create);
router.get("/show/:id", studentController.show);
router.put("/update/:id", loginRequired, studentController.update);
router.delete("/delete/:id", loginRequired, studentController.delete);

export default router;
