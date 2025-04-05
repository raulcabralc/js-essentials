const path = require('path');

exports.globalMiddleware = (req, res, next) => {
    res.locals.globalVariable = 'This is the local variable';
    next();
}

exports.checkCsrf = (error, req, res, next) => {
    if (error && error.code === 'EBADCSRFTOKEN') {
        return res.render('errorCsrf');
    };
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
