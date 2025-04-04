module.exports = (req, res, next) => {
    console.log('otherMiddleware reached!!');
    next();
};
