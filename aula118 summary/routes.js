const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contactController = require("./src/controllers/contactController");

// Rotas da home
route.get("/", homeController.homePage);
// ao entrar na rota "/" (home), o homeController
// irá controlar esta rota

route.post("/", homeController.handlePost);

// Rotas de contato
route.get("/contact", contactController.homePage);

module.exports = route;
