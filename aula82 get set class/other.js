class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    get fullName() {
        return this.name + ' ' + this.surname;
    };

    set fullName(value) {
        value = value.split(' ');
        this.name = value.shift(' ');
        this.surname = value.join(' ');
    }
}

const p1 = new Person('Cecília', 'Oliveira');
p1.fullName = 'Raul Cabral Caxeta';
console.log(p1.fullName);
console.log(p1.name);
console.log(p1.surname);
