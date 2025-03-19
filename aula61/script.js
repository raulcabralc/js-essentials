// precisa ser function* para
// a função ser geradora
// *****************
function* generator1() {
    // yield quase igual return,
    // mas yield retorna mais
    // valores de acordo com o
    // .next() de quem a chamar
    yield 'Value 1';
    yield 'Value 2';
    yield 'Value 3';
}

const g1 = generator1();

console.log(g1);
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

for (let value of g1) {
    console.log(value);
};
// for não executa pq todos os next()
// já foram chamados, ou seja, não
// existe mais valor a ser chamado






function* counter() {
    let index = 0;

    while (true) {
        yield index;
        index++;
    };
    // gerador infinito,
    // sempre terá um next()
}

const count = counter();
console.log(count.next().value)
console.log(count.next().value)
console.log(count.next().value)
console.log(count.next().value)
console.log(count.next().value)
console.log(count.next().value)
console.log(count.next().value)
console.log(count.next().value)






function* test1() {
    yield 0;
    yield 1;
    yield 2;
}

function* test2() {
    yield* test1();
    // já chama a test1()
    // é o valor do yield do test2()
    yield 3;
    yield 4;
    yield 5;
}

const second = test2();
for (let value of second) {
    console.log(value);
}






function* callFuncs() {
    yield () => {
        console.log('Yield 1');
    };

    return () => {
        console.log('Return');
        // return mata a função,
        // não permite o próximo next
    };

    yield () => {
        console.log('Yield 1');
    };
}

const functions = callFuncs();
const func1 = functions.next().value;
const func2 = functions.next().value;

func1();
func2();
