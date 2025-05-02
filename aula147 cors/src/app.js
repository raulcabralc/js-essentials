// Dotenv
import dotenv from "dotenv";
dotenv.config();

import "./database";

import express from "express";
import cors from "cors";
import { corsOptions } from "./config/corsConfig";

// Routes
import homeRoute from "./routes/homeRoute";
import userRoute from "./routes/userRoute";
import tokenRoute from "./routes/tokenRoutes";
import studentRoute from "./routes/studentRoute";
import photoRoute from "./routes/photoRoutes";

import { resolve } from "path";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      "/images",
      express.static(resolve(__dirname, "..", "uploads", "images"))
    );
  }

  routes() {
    this.app.use("/", homeRoute);
    this.app.use("/users/", userRoute);
    this.app.use("/token/", tokenRoute);
    this.app.use("/students/", studentRoute);
    this.app.use("/photo/", photoRoute);
  }
}

export default new App().app;
