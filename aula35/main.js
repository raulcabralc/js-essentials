const fruits = [
    'Maçã', 'Pêra', 'Uva'
];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for (let i in fruits) {
    // mesma coisa do for acima, mas encurtado
    // for in lê os índices ou chaves do objeto
    console.log(fruits[i]);
};

console.log();

const pessoa = {
    nome: 'Cecília',
    sobrenome: 'Oliveira',
    idade: '7'
};

for (let k in pessoa) {
    // retorna o indice
    console.log(k);
};
