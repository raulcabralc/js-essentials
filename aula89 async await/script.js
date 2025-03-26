/*
Async / Await
Await só pode ser usado se estiver
dentro de uma async function()!!!

async function name(param) {
    const variable = await value;
    // fazer algo com o valor

    const variable2 = await value1;
    // fazer algo com o valor

    const variable3 = await value2;
    // fazer algo com o valor

    const variable4 = await value3;
    // fazer algo com o valor
}

Para capturar o erro, que antes seria com .catch()
pode se usar o .catch() dentro do await:

const variable2 = await value1.catch(() => {});
*/

function random() {
    return Math.floor(Math.random() * (5000 - 1000) + 1000)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor incorreto');
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

async function executes() {
    try {
        const fase1 = await wait('Fase 1', random());
        console.log(fase1);

        const fase2 = await wait(2, random());
        console.log(fase2);

        const fase3 = await wait('Fase 3', random());
        console.log(fase3);

        console.log('Terminou na', fase3);
    } catch (error) {
        console.log('Erro!');
    };
}

executes();

// Pending -> pendente
// Fullfilled -> resolvida
// Rejected -> rejeitada

// wait('Fase 1', random())
//     .then((value) => {
//         console.log(value);
//         return wait('Fase 2', random())
//     })
//     .then((value) => {
//         console.log(value);
//         return wait('Fase 3', random())
//     })
//     .then((value) => {
//         console.log(value);
//         return wait('Fase 4', random());
//     })
//     .then((value) => {
//         console.log('Terminou na', value);
//     })
//     .catch((error) => {
//         console.log('Erro!', error);
//     });
