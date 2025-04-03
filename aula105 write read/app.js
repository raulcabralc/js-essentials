const path = require('path');
const write = require('./modules/write');
const read = require('./modules/read');
const filePath = path.resolve(__dirname, 'people.json')

const people = [
    {
        name: 'Cecília',
        surname: 'Oliveira',
        age: 25,
        salary: 4250,
        gender: 'F',
        email: 'ceciliaocteixeira@gmail.com'
    },
    {
        name: 'Raul',
        surname: 'Cabral',
        age: 36,
        salary: 25500,
        gender: 'M',
        email: 'raulcabralc@gmail.com'
    },
    {
        name: 'Larissa',
        surname: 'Pires',
        age: 56,
        salary: 40350,
        gender: 'F',
        email: 'laripcabral@gmail.com'
    },
    {
        name: 'André',
        surname: 'Marques',
        age: 54,
        salary: 68720,
        gender: 'M',
        email: 'andremteixeira@gmail.com'
    }
];

const jsonPeople = JSON.stringify(people, '', 2);
// transforma o arquivo em json
// JSON.stringify(conteúdo, conteúdo do espaço, tamanho do espaço)

write(filePath, jsonPeople);

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    // JSON.parse(x) transforma x em um objeto JavaScript
    data.forEach(value => {
        console.log(value);
    });
}

readFile(filePath);
