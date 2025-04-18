import { Router } from "express";
const router = new Router();
import userController from "../controllers/UserController";

router.post("/", userController.create);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
