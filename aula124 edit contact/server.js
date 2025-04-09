require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("READY");
    console.log();
    console.log("\x1b[32mConnection to DB successfull.\x1b[m");
    console.log();
  })
  .catch((error) => {
    console.log();
    console.log("\x1b[91mConnection to DB unsuccessfull.\x1b[m");
    console.log();
    console.log(error);
  });

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");
const {
  globalMiddleware,
  checkCsrf,
  csrfMiddleware,
} = require("./src/middlewares/globalMiddleware.js");

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: "anything!!",

  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);

app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());

app.use(checkCsrf);
app.use(csrfMiddleware);
app.use(globalMiddleware);
app.use(routes);

app.on("READY", () => {
  app.listen(3000, () => {
    console.log("\x1b[93mServer is running on port 3000.");
    console.log("http://localhost:3000\x1b[m");
    console.log();
  });
});
