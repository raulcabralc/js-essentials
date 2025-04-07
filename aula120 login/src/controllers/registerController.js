exports.index = (req, res, next) => {
  console.log();
  console.log("Rendering Register Page...");
  console.log();
  res.render("register");
  console.log("Register Page Rendered");
  console.log();
  next();
};
