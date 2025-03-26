function random() {
    return Math.floor(Math.random() * (5000 - 1000) + 1000)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor incorreto');
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, time);
    });
}

const promises = [
    wait('Promise1', random()),
    wait('Promise2', random()),
    wait('Promise3', random())
];

Promise.race(promises)
    // retorna a que chegar mais rápido, e apenas ela
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log('Erro!', error);
    });