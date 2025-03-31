// import { variaveis } from './arquivo';

// import { name as name2, surname, age, sum, Person } from './module1';
import * as myModule from './module1';
import mod2default, { Person } from './module2'

// variable as anotherName:
// importa a variável, mas o nome dela
// passa a ser anotherName, apesar de ter o mesmo valor

console.log(myModule);
console.log(myModule.surname);

const name = 'Raul';

const user = {
    name: name,
    surname: myModule.surname,
    age: myModule.age
};

const p1 = new Person('Larissa', 'Pires');

console.log(user);
console.log(myModule.sum(2, 1));
console.log(p1);
console.log(mod2default(2, 5));
