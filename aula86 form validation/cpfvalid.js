class ValidateCpf {
    constructor(cpf) {
        this.cleanCpf = cpf.replace(/\D+/g, '');
    }

    sequence() {
        return this.cleanCpf[0].repeat(11) === this.cleanCpf;
    }

    generateCpf() {
        const cpfWithoutLast = this.cleanCpf.slice(0, -2);
        const digit1 = ValidateCpf.generateDigit(cpfWithoutLast);
        const digit2 = ValidateCpf.generateDigit(cpfWithoutLast + digit1);
        this.newCpf = cpfWithoutLast + digit1 + digit2;
    }

    static generateDigit(cpfWithoutLast) {
        let total = 0;
        let reverse = cpfWithoutLast.length + 1;
        for (let numericString of cpfWithoutLast) {
            total += reverse * Number(numericString);
            reverse--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    validates() {
        if (!this.cleanCpf) return false;
        if (typeof this.cleanCpf !== 'string') return false;
        if (this.cleanCpf.length !== 11) return false;
        if (this.sequence()) return false;
        this.generateCpf();

        return this.newCpf === this.cleanCpf;
    }
}
