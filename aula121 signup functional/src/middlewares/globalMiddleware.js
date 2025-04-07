exports.globalMiddleware = (req, res, next) => {
  res.locals.errors = req.flash("errors");
  res.locals.success = req.flash("success");
  next();
};

exports.checkCsrf = (error, req, res, next) => {
  if (error) {
    return res.render("errorCsrf");
  }

  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
