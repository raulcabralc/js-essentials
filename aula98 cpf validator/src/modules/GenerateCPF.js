import ValidateCpf from "./ValidateCPF";

export default class GenerateCpf {
    random(min = 100000000, max = 999999999) {
        return String(Math.round(Math.random() * (max - min) + min));
    }

    format(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    newCpf() {
        const cpfWithoutLast = this.random();
        const digit1 = ValidateCpf.generateDigit(cpfWithoutLast);
        const digit2 = ValidateCpf.generateDigit(cpfWithoutLast + digit1);
        const fullCpf = cpfWithoutLast + digit1 + digit2;
        return this.format(fullCpf);
    }
}
