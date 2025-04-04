exports.homePage = (req, res, next) => {
    console.log('Responding client');
    console.log();
    res.render('index');
    next();
    // colocando o next para que
    // a função anônima do  terceiro
    // middleware execute
}

exports.handlePost = (req, res) => {
    res.render('post');
    console.log(req.body);
};
