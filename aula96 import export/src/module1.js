export const name = 'Cecíclia';
// não consegue fazer
// export defaul const ...
export const surname = 'Oliveira';
export const age = 18;
const privateVariable = 'Not exported, it only exists here';

export function sum(x, y) {
    if (!x === 'number' || y === 'number') return NaN;
    return x + y;
}

export { name as default }

// export { name, surname, age, sum as sumFunction };
// o as age igual no export, apenas troca o nome e mantém o valor
