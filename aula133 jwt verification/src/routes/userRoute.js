import { Router } from "express";
const router = new Router();
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

router.post("/", userController.create);
router.get("/", loginRequired, userController.index);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
