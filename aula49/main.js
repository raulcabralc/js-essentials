// Hoisting pega primeiro todas as
// funções declaradas, então não
// importa quando chamara a função,
// se ela existir, vai ser executada

// Hoisting só acontece quando a função
// é declarada da maneira abaixo:

falaOi();

function falaOi() {
    console.log('oi');
}

// First-class Objects

// Function expression

const souUmDado = function () {
    console.log('funções são dados')
}

souUmDado();

// Função pode executar funções,
// dito que a função é um dado

function exeFunction(func) {
    console.log(`Executando função...`)
    func();
}

exeFunction(falaOi);

// Arrow function

const arrowFunction = () => {
    console.log('arrow function');
}

arrowFunction();

// Função dentro de um objeto

const object = {
    tarde: () => {
        console.log('Boa tarde');
    }
}

object.tarde();
