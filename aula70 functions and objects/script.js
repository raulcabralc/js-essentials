const person = {
    name: 'Cecília',
    surname: 'Oliveria',
    age: 7
};

const nameKey = 'name';
// delete person.surname;
console.log(person.name);
console.log(person['name']);
console.log(person[nameKey]);

const person2 = new Object();
person2.name = 'Raul';
person2.surname = 'Cabral';
person2.age = 18;
