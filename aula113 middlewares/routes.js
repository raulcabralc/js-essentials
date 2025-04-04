const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// middleware -> tudo o que é executado entre o começo
// do código e antes de enviar para o usuário

function myMiddleware(req, res, next) {
    // sessões e cookies:
    // servem para salvar dados do
    // usuário.
    // sessões: server
    // cookies: client
    console.log();
    console.log('Middleware!!');
    console.log();
    next();
    // caso não colocar o next, a requisição
    // acaba na função! nesse caso:
    // iria apenas executar myMiddleware,
    // não iria passar por homeController.homePage
    // nem nada após
}

// Rotas da home
route.get('/', myMiddleware, homeController.homePage, (req, res, next) => {
    console.log('Third middleware!!!');
});
// passa pelo '/', que seria a homepage,
// passa pela função myMiddleware,
// passa pela função homePage
route.post('/', homeController.handlePost);

// Rotas de contato
route.get('/contact', contactController.homePage);

module.exports = route;
