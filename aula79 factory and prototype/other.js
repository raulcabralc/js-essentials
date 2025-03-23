// desacoplando os metodos da função,
// para que eles possam ser reutilizados
// no código

const speak = {
    speak() {
        console.log(`${this.name} is talking.`);
    }
}

const eat = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

const drink = {
    drink() {
        console.log(`${this.name} is drinking.`);
    }
}

const personPrototype = Object.assign(speak, eat, drink);


function createPerson(name, surname) {
    return Object.create(personPrototype, {
        // linkando o prototype para createPerson()
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
