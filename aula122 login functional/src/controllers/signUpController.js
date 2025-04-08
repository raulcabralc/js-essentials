const { SignUp } = require("../models/SignUpModel");

exports.index = async (req, res, next) => {
  console.log();
  console.log("Rendering Sign Up Page...");
  console.log();
  await res.render("signup");
  console.log("Sign Up Page Rendered");
  console.log();
  next();
};

exports.register = async (req, res, next) => {
  try {
    const signUp = new SignUp(req.body);
    await signUp.register();

    if (signUp.errors.length > 0) {
      req.flash("errors", signUp.errors);
      req.session.save(() => {
        return res.redirect("/signup");
      });

      return;
    }

    req.flash(
      "success",
      'Your user has been created. <a href="/login">Log In</a>'
    );
    req.session.save(() => {
      return res.redirect("/signup");
    });
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};
