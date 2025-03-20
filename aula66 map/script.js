// diferente do filter, map altera os valores
// do array ao invés de selecioná-los

// Dobre os números
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const doubleNumbers = numbers.map((value) => {
    return value * 2;
});
console.log(doubleNumbers);
