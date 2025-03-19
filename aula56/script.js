const line = () => {
    return console.log();
}
const show = (log) => {
    return console.log(log);
}

function createPerson(name, surName, height, weight) {
    return {
        name,
        surName,

        get fullName() {
            return `${this.name} ${this.surName}`
        },

        // Setter
        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.surName = value.join(' ');
        },

        print(subject) { // mesma coisa que print: function(subject)
            // função dentro de objeto = método
            return `${this.name} is talking about ${subject}.`;
            // this procura o valor mencionado no objeto inteiro
        },

        // Getter
        get imc() {
            // ao colocar o get, faz a função fingir ser
            // um atributo (ao chamar, não use .imc(), use apenas .imc)
            const index = this.weight / (this.height ** 2)
            return `${name}'s IMC is ${index.toFixed(2)}`;
        },

        height,
        weight
    };
}

const p1 = createPerson('Cecília', 'Oliveira', 1.2, 30);
const p2 = createPerson('Raul', 'Cabral', 1.8, 80);

show(p1);
line();
show(p1.print('Front-End development'));
show(p2.print('Front-End development'));
line();
show(p1.imc);
show(p2.imc);
line();
p1.fullName = 'Cecília Oliveira Cabral'
show(p1.fullName);
show(p1.name);
show(p1.surName);
