const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const registerController = require("./src/controllers/registerController");

// Rotas da home
route.get("/", homeController.index);

// Rotas do login
route.get("/login", loginController.index);
route.get("/register", registerController.index);

module.exports = route;
