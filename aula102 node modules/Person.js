module.exports = class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is speaking.`);
    }
}
