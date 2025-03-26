/*
function comPromise(parâmetros da função) {
    return new Promise((resolve, reject) => {
         Função que leva tempo para executar
    });
}

comPromise(parâmetros).then((vaimostrar) => {
    return vaimostrar;
    }).then((vaimostrar) => {
    return vaimostrar;
    }).then((vaimostrar) => {
    return vaimostrar;
    })
    
pode fazer uma cadeia enorme
*/


// promises foram feitas para acabar com
// callback hells.
// promises garantem a ordem de certos itens
// mesmo que seus tempos de chegada variem

function random() {
    return Math.floor(Math.random() * (5000 - 1000) + 1000)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor incorreto');
        // resolve: quando der certo
        // reject: quando der errado
        setTimeout(() => {
            resolve(msg);
        }, time);
    });


}

wait('Opa 1', random())
    .then((message) => {
        console.log(message);
        return wait('Opa 2', random());
    })
    .then((message) => {
        console.log(message);
        return wait(3, random());
    })
    .then((message) => {
        return message + ' na outra função';
        // não dando console.log, apenas
        // guardando o valor + a string
        // para usar no próximo then
    })
    .then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log('ERRO:', error);
    });

// .then() e .catch() vão dizer o que
// fazer depois.
// then para resolve
// catch para reject
