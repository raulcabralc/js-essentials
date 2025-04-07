exports.index = (req, res, next) => {
  console.log();
  console.log("Rendering Login Page...");
  console.log();
  res.render("login");
  console.log("Login Page Rendered");
  console.log();
  next();
};
