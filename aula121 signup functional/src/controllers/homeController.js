exports.index = (req, res, next) => {
  console.log();
  console.log("Rendering Home Page...");
  console.log();
  res.render("index")
  console.log("Home Page Rendered");
  console.log();
  next();
};