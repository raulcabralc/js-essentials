function Person(name, surname) {
    // Usar maiúscula ao fazer função construtiva
    const ID = 123456;

    const internMethod = () => {

    };

    this.name = name;
    this.surname = surname;

    this.method = () => {
        console.log(`Method (${name})`);
    };
}

const p1 = new Person('Cecília', 'Oliveira');
const p2 = new Person('Raul', 'Cabral');
p1.method();
