// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const sumDoubleEven = (array) => {
    const filterNum = array.filter((value) => {
        return value % 2 === 0;
    });

    const doubleNum = filterNum.map((value) => {
        return value * 2;
    });

    const sumNum = doubleNum.reduce((accumulator, value) => {
        accumulator += value;
        return accumulator;
    }, 0);

    return sumNum;
};

console.log(sumDoubleEven(numbers));
