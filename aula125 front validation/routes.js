const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const signUpController = require("./src/controllers/signUpController");
const contactController = require("./src/controllers/contactController");

const { loginRequired } = require("./src/middlewares/globalMiddleware");

// Rotas da home
route.get("/", homeController.index);

// Rotas do login
route.get("/signup", signUpController.index);
route.post("/signup/register", signUpController.register);
route.get("/login", loginController.index);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

// Rotas do contato
route.get("/contact/index", loginRequired, contactController.index);
route.post("/contact/register", loginRequired, contactController.register);
route.get("/contact/:id", loginRequired, contactController.editIndex);
route.post("/contact/edit/:id", loginRequired, contactController.editContact);
route.get("/contact/delete/:id", loginRequired, contactController.delete);

module.exports = route;
