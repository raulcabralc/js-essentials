function hello() {
    console.log('Hello!');
}

hello();

function double(number) {
    //    numero *= 2;
    return number *= 2; // Precisa retornar um valor
}

console.log(double(7));

function sum(x, y) {
    const sumResult = x + y;
    return sumResult;
}

console.log(sum(2, 8));

const root = function (num) {
    return num ** 0.5;
}; // Variável recebe a função, termina com ;

// Função acima feita como arrow function

const rootArrow = num => num ** 0.5;
// É melhor fazer a função do jeito tradicional

console.log(root(9));
console.log(rootArrow(25));