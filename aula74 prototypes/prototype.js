function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullName = function () {
    // arrow function quebra!
    return this.name + ' ' + this.surname;
};

const person1 = new Person('Cecília', 'Oliveira');

// utilizando person1.fullName():

// JS irá procurar a função nessa sequência:
//
// person1,
// Person.prototype,
// Object.prototype
