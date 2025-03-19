let i = 0;
// variável de controle fora do while
while (i <= 3) {
    console.log(i);
    i++;
};

console.log();

function randomNum (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
};

let rand = 10;

while (rand !== 10) {
// while checa a condição (rand !== 10) e executa o código
    rand = randomNum(1, 30);
    console.log(rand);
};

console.log();

do {
// do while executa o código e depois checa condição
    rand = randomNum(1, 30);
    console.log(rand);
} while (rand !== 10);
