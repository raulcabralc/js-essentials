const nome = 'Cecília';

for (let value of nome) {
    // quase igual ao for in,
    // mas retorna o valor
    console.log(value);
};

console.log();

const pessoa = {
    nome: 'Cecis',
    sobrenome: 'Oliveira'
};

for (let value of pessoa) {
    // vai dar erro!!!
    // for of não funciona em objetos
    console.log(value);
};
