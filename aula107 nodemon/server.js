// CRUD -> Create  Read  Update  Delete
//         POST    GET   PUT     DELETE

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    // app.get('rota', função(requisição, resposta))
    response.send(`
        <form action="/" method="POST" />
        Test Change: <input type="text" name="name" />
        Other Change: <input type="text" name="name" />
        <button>Submit</button>
        </form>
        `);
});

app.post('/', (request, response) => {
    response.send('Formulary received');
})

app.get('/contact', (request, response) => {
    response.send('raulcabralc@gmail.com');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
    console.log('http://localhost:3000');
});
