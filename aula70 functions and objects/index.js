const person = {
    name: 'Cecília',
    surname: 'Oliveira',
    age: 7,
    speak() {
        // não utilizar arrow function
        return (`${this.name} is speaking`);
    },
    getBirthYear() {
        const date = new Date();
        return date.getFullYear() - this.age;
    }
};

console.log(person.speak());
console.log(person.getBirthYear());
