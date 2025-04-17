import { Router } from "express";
const router = new Router();
import homeController from "../controllers/HomeController";

router.get("/", homeController.index);

export default router;
