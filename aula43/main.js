function fizzBuzz (num) {
    if (typeof num !== 'number') return 'Não é um número';
    if (num < 0 || num > 100) return 'Número fora do alcance';
    if (num % 3 !== 0 && num % 5 !== 0) return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
};

const teste = fizzBuzz(15);
console.log(teste);
