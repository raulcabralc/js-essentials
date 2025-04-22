import { Router } from "express";
const router = new Router();
import multer from "multer";

import photoController from "../controllers/PhotoController";
import multerConfig from "../config/multer";

const upload = multer(multerConfig);

router.post("/", upload.single("photoMultipart"), photoController.store);

export default router;
