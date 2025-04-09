const Login = require("../models/LoginModel");

exports.index = (req, res, next) => {
  if (req.session.user) {
    return res.render("loggedin");
  }
  console.log();
  console.log("Rendering Login Page...");
  console.log();
  res.render("login");
  console.log("Login Page Rendered");
  console.log();
  next();
};

exports.login = async (req, res, next) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(() => {
        return res.redirect("/login");
      });

      return;
    }

    if (!login.user) {
      req.flash("errors", login.errors);
      req.session.save(() => {
        return res.redirect("/login");
      });

      return;
    }

    req.flash("dark", `Logged in as <b>${login.user.username}</b >.`);
    req.session.user = login.user;
    req.session.save(() => {
      return res.redirect("/");
    });
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};

exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    return res.redirect("/");
  });
};
