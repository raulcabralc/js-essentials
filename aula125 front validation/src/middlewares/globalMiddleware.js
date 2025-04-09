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

exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash("errors", "You must log in in order to modify contacts.");
    req.session.save(() => {
      res.redirect("/");
    });
    return;
  }

  next();
};
