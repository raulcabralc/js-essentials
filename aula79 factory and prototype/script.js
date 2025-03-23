function createPerson(name, surname) {
    const personPrototype = {
        speak() {
            console.log(`${this.name} is talking.`);
        },
        eat() {
            console.log(`${this.name} is eating.`);
        },
        drink() {
            console.log(`${this.name} is drinking.`);
        }
    };

    return Object.create(personPrototype, {
        name: {
            value: name
        },
        surname: {
            value: surname
        }
    });
}

const p1 = createPerson('Cecília', 'Oliveira');
p1.drink();
p1.eat();
p1.speak();
