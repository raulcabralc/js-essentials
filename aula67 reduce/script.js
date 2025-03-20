// Some todos os números
// Retorne um array com os pares
// Retorne um array com o dobro dos valores

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// numbers.reduce ((accumulator, value, index, array){ }, accumulator starter value )
const total = numbers.reduce((accumulator, value) => {
    accumulator += value;
    return accumulator;
}, 0);

const even = numbers.filter((num) => {
    return num % 2 === 0;
});

const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(total);
console.log(even);
console.log(doubled);
