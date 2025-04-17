/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH / PUT
*/

import { Router } from "express";
const router = new Router();
import homeController from "../controllers/HomeController";

router.get("/", homeController.index);

export default router;
