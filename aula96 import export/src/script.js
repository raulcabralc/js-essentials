// import { variaveis } from './arquivo';
import { name as name2, surname, age, sum } from './module1';
// variable as anotherName:
// importa a variável, mas o nome dela
// passa a ser anotherName, apesar de ter o mesmo valor

const name = 'Raul';

const user = {
    name: name,
    surname: surname,
    age: age
};

console.log(user);
console.log(name2);
console.log(sum(2, 1));
