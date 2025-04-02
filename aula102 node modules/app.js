const times = require('./mod');
const anyNameForPerson = require('./Person');
const path = require('path');
// Simulando um export default
// cada módulo faz sua função e exporta
// o que precisa ser exportado

console.log(times(2, 5));

const p1 = new anyNameForPerson('Ceci');
console.log(p1);
p1.speak()

console.log(__filename);
console.log(__dirname);
// pegam o caminho da raiz
// até o arquivo/pasta atual

// console.log(path.resolve(__dirname, '..', '..'));
// vai voltar duas pastas junto e
// caso seja em linux, windows ou mac
// vai ser o caminho correto

console.log(path.resolve(__dirname, '..', '..', 'hundred', 'aula1', 'index.js'));
