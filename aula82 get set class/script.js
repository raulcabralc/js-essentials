// Symbol() nunca vai ser igual
// um ao outro, sempre vai ter
// um valor diferente
const _speed = Symbol();

class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    };

    set speed(value) {
        if (typeof value !== 'number') return;
        if (value > 100 || value < 0) return;
        this[_speed] = value;
    }

    get speed() {
        return this[_speed];
    }

    speedUp() {
        if (this[_speed] >= 100) {
            return;
        };
        this[_speed]++;
    };

    brake() {
        if (this[_speed] <= 0) {
            return;
        };
        this[_speed]--;
    }
}

const car1 = new Car('Gol');

for (let i = 0; i <= 200; i++) {
    car1.speedUp();
    console.log(car1[_speed]);
};

car1.speed = 90;
// SETTER
// setando a speed

console.log(car1.speed, car1.name);
// GETTER
// getting o valor speed
