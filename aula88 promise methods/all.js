/*
Promise.all() ! Recebe um array e resolve todos os valores
Promise.race() ! Recebe valores e retorna o mais rápido
Promise.resolve() ! Recebe um valor e já resolve (.then())
Promise.reject() ! Recebe um valor e já rejeita (.catch())
*/

function random() {
    return Math.floor(Math.random() * (5000 - 1000) + 1000)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor incorreto');
        // resolve: quando der certo
        // reject: quando der errado
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, time);
    });
}

const promises = ['Primeiro valor',
    wait('Promise1', random()),
    wait('Promise2', random()),
    wait('Promise3', random()),
    'Último valor'
];

Promise.all(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log('Erro!', error);
    });


