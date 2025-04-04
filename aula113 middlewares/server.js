const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const otherMiddleware = require('./src/middlewares/otherMiddleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));
// seta onde será a pasta de elementos estáticos
// elementos estáticos são os que serão apresentados
// no front end

app.set('views', path.resolve(__dirname, 'src', 'views'));
// setando a pasta views
app.set('view engine', 'ejs')
// setando a engine do view

app.use(otherMiddleware);
// colocando o otherMiddleware no app.use
// fará ele ser sempre executado em todas as rotas
app.use(routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
    console.log('http://localhost:3000');
});
