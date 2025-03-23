// Classe é quase igual uma função
// construtora, mas atrela diretamente
// o método ao prtotype

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    speak() {
        console.log(`${this.name} is speaking.`);
    }
}

const p1 = new Person('Cecília', 'Oliveira');
console.log(p1);
