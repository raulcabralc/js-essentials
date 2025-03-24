// Superclass
class Device {
    constructor(name) {
        this.name = name;
        this.on = false;

    };

    turnOn() {
        if (this.on) {
            console.log(`${this.name} is already turned on!`);
            return;
        };
        this.on = true;
    };

    turnOff() {
        if (!this.on) {
            console.log(`${this.name} is already turned off!`);
            return;
        };
        this.on = false;
    };
}

class Smartphone extends Device {
    // extends já herda tudo de Device
    constructor(name, color, model) {
        super(name);
        // herda o parametro name da
        // superclass (no momento Device)
        this.color = color;
        this.model = model;
    }
}

class Tablet extends Device {
    constructor(name, hasWifi, battery) {
        super(name);
        this.hasWifi = hasWifi;
        this.battery = battery;
    }

    turnOn() {
        if (this.battery < 30) {
            console.log(`Bateria muito baixa para ligar: ${this.battery}`);
            return;
        };
        if (this.on) {
            console.log(`${this.name} is already turned on!`);
            return;
        };
        this.on = true;
    }
}

const d1 = new Smartphone('Samsung', 'Black', 'Galaxy S22');
console.log(d1);

const d2 = new Tablet('iPad', true, 20);
d2.turnOn();
console.log(d2);
