const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
// setando a pasta views
app.set('view engine', 'ejs')
// setando a engine do view

app.use(routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
    console.log('http://localhost:3000');
});
