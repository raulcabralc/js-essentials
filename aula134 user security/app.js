// Dotenv
import dotenv from "dotenv";
dotenv.config();

import "./src/database";

import express from "express";

// Routes
import homeRoute from "./src/routes/homeRoute";
import userRoute from "./src/routes/userRoute";
import tokenRoute from "./src/routes/tokenRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoute);
    this.app.use("/users/", userRoute);
    this.app.use("/token/", tokenRoute);
  }
}

export default new App().app;
