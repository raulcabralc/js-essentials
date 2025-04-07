exports.homePage = (req, res, next) => {
  console.log();
  console.log("Responding client");
  console.log();
  res.render("index")
  next();
};