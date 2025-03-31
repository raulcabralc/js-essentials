export const name = 'Cecíclia';
export const surname = 'Oliveira';
export const age = 18;

export function sum(x, y) {
    if (!x === 'number' || y === 'number') return NaN;
    return x + y;
}

// export { name, surname, age, sum as sumFunction };
// o as age igual no export, apenas troca o nome e mantém o valor
