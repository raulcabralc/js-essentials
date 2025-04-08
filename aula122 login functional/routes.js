const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const signUpController = require("./src/controllers/signUpController");

// Rotas da home
route.get("/", homeController.index);

// Rotas do login
route.get("/signup", signUpController.index);
route.post("/signup/register", signUpController.register);
route.get("/login", loginController.index);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

module.exports = route;
