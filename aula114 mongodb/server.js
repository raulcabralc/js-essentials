require('dotenv').config();
// não precisa de variável para requerir nesse caso,
// pois não será utilizada novamente

const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://raulc:PASSWORD@cursojs.oxvx6kv.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority&appName=CursoJS';
// conectando a base de dados do mongoDB com o meu projeto
// não pode deixar a senha no connectionString!!!!
// para resolver isso, instala-se o dotenv e cria um arquivo .env na raiz
// após isso, para linkar no mongoose.connect,
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('READY')
        console.log();
        console.log('\x1b[32mConnection to DB successfull.\x1b[m')
        console.log();
    })
    .catch((error) => {
        console.log('\e[91mConnection to DB unsuccessfull.\x1b[m');
        console.log();
        console.log(error);
    });
// desse jeito, o app só vai emitir READY quando conseguir
// conectar com a base de dados, caso contrário, irá
// retornar o erro em catch e não irá iniciar o servidor

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
// setando a pasta views
app.set('view engine', 'ejs')
// setando a engine do view

app.use(routes);

app.on('READY', () => {
    // app.on('READY') ativa quando ocorrer app.emit('READY')

    // colocando o app.listen() dentro do app.on('READY')
    // para que ele apenas inicie o servidor após a
    // conexão com a base de dados
    app.listen(3000, () => {
        console.log('\x1b[93mServer is running on port 3000.');
        console.log('http://localhost:3000\x1b[m');
        console.log();
    });
})

