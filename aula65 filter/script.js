// Retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numbersFilter = numbers.filter((num) => {
//     if (num > 10) {
//         return num;
//     };
// });

const numbersFilter = numbers.filter((value, index) => {
    console.log(index, num);
    return num > 10;
});

console.log(numbersFilter);
