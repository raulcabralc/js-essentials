// CRUD -> Create  Read  Update  Delete
//         POST    GET   PUT     DELETE

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// /profiles/12345?campanha=googleads&campanha_nome=seila
// o ? inicia uma query string, que contém uma chave e um valor,
// caso tenha mais query strings, se usa o & para separá-las

app.get('/', (request, response) => {
    // app.get('rota', função(requisição, resposta))
    response.send(`
        <form action="/" method="POST" />
        Test Change: <input type="text" name="name" />
        <button>Submit</button>
        </form>
        `);
});

// PARÂMETRO OBRIGATÓRIO: '/tests/:idUser'
// PARÂMETRO OPCIONAL: '/tests/:idUser?'

app.get('/tests/:idUser', (req, res) => {
    // /tests/:idUser faz o tests mostrar sempre
    // o conteúdo independente do valor que estiver no
    // /:idUser, e deixa esse valor logado no
    // console, caso use console.log(req.params)
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params.idUser}<br />${req.query.name}`);
});
// http://localhost:3000/tests/34857?name=Ceci&surname=Oliveira
// retornaria no console:
// { idUser: '34857 }
// { name: 'Ceci', surname: 'Oliveira' }

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(`Formulary received.<br />${request.body.name}`);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
    console.log('http://localhost:3000');
});
