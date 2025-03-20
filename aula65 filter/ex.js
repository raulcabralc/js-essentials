// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A

const people = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const fiveLetter = people.filter((object) => {
    return object.nome.length >= 5;
});

const moreFifty = people.filter((object) => {
    return object.idade > 50;
});

const lastA = people.filter((object) => {
    return object.nome.toLowerCase().endsWith('a');
});

console.log(fiveLetter);
console.log(moreFifty);
console.log(lastA);
