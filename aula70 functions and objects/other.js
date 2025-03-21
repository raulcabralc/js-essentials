// Factory Function

function createPerson(name, surname, age) {
    return {
        name,
        surname,
        age,
        get fullName() {
            // get finge ser um elemento normal,
            // não funciona se chamar com ()!!!
            return `${this.name} ${this.surname}`;
        }
    };
}

const person1 = createPerson('Cecília', 'Oliveira', 7);
console.log(person1.fullName);


// Constructor Function

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = () => {
        return `${this.name} ${this.surname}`;
    };
    // Object.freeze(this) caso quisesse
    // freezar o objeto em si
}

const person2 = new Person('Raul', 'Cabral', 18);
Object.freeze(person2);
// Object.freeze(x) não permite alterações
// no objeto x
console.log(person2.fullName());
