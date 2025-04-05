module.exports = function (req, res, next) {
    res.locals.globalVariable = 'This is the local variable';
    next();
}
