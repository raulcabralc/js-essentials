const random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const generateUpper = () => {
    return String.fromCharCode(random(65, 90));
}

const generateLower = () => {
    return String.fromCharCode(random(97, 122));
}

const generateNumber = () => {
    return String(random(0, 9));
}

const generateSymbol = () => {
    const symbols = ',.;[]{}()!@#$%&_-+=';
    // , $ % _ ( ) # & = ; + . [ ] { } @ !
    return symbols[random(0, symbols.length)];
}

export default function generatePassword(quantity, upper, lower, numbers, symbols) {
    const passArray = [];
    quantity = Number(quantity);

    for (let i = 0; i < quantity; i++) {
        upper && passArray.push(generateUpper());
        lower && passArray.push(generateLower());
        numbers && passArray.push(generateNumber());
        symbols && passArray.push(generateSymbol());
    };

    return passArray.join('').slice(0, quantity);
}
