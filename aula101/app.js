// const mod1 = require('./mod1').name;
// no caso acima, importaria apenas o name
// do mod1

// const { name, surname, speakFull } = require('./mod1');
// vai importar apenas as variáveis que estão no
// objeto

const mod1 = require('./mod1');
const mod2 = require('./mod2');
const path = require('path');
const axios = require('axios');
// módulos que já existem no node:
// não precisa usar o caminho relativo,
// como no './mod1'

const speakFull = mod1.speakFull;

console.log(speakFull());


const p1 = new mod2.Person('Cecília');
console.log(p1);

axios('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
    .catch(e => console.log('Error!', e));
