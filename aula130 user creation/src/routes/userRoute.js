import { Router } from "express";
const router = new Router();
import userController from "../controllers/UserController";

router.post("/", userController.create);

export default router;
