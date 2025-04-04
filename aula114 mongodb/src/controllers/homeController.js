const HomeModel = require('../models/HomeModel');

HomeModel.create({
    // criando uma collection
    anyString: 'Title of the collection',
    importantNum: 24122006
    // importantNum: 'A string' (gera erro!! pois deve ser um número)
})
    .then(data => console.log(data))
    .catch(error => console.log('Error!', error));

// HomeModel.find(FILTER OPTIONS)
//     .then(data => console.log(data))
//     .catch(error => concole.log(error));

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
