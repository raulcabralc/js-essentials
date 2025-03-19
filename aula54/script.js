// callback serve para organizar uma ordem
// de coisas que devem acontecer, quando
// estiver mexendo com instabilidades de rede
// como logar em um banco de dados, é imprevisível
// quando certas coisas acontecerão, então é
// bom usar callback para manter a ordem

function f1(callback) {
    if (callback) {
        f1Callback();
    }
    console.log('f1');
}

function f2(callback) {
    if (callback) {
        f2Callback();
    }
    console.log('f2');
}

function f1Callback() {
    f2(f2Callback());
}

function f2Callback() {
    f3();
}