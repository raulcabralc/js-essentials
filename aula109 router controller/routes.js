const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

// Rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.handlePost);

// Rotas de contato
route.get('/contact', contactController.homePage);

module.exports = route;
