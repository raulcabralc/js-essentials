exports.globalMiddleware = (req, res, next) => {
  res.locals.errors = req.flash("errors");
  res.locals.success = req.flash("success");
  res.locals.dark = req.flash("dark");
  res.locals.user = req.session.user;
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
