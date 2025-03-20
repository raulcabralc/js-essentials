// Retorne a pessoa mais velha

const people = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

const older = people.reduce((accumulator, value) => {
    if (value.idade < accumulator.idade) {
        console.log(accumulator);
        return accumulator;
    };
    return value;
});

console.log(older);
