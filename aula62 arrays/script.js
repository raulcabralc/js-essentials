function show(value) {
    return console.log(value);
}

const names = ['Cecília', 'Raul', 'Larissa', 'André']
// const names = new Array('Cecília', 'Raul', 'Larissa', 'André');
// new Array() mesma coisa que []
show(names);

names[2] = 'Cecis de novo'
show(names);

delete names[2];
show(names);



// const test = names;
const guitars = ['Strato', 'Telecaster', 'Les Paul'];
const test = [...guitars];
// mesmo colocando em uma variável,
// as mudanças dela refletem no array
const removed = test.pop();
show(test);
show(guitars);
show(removed);



const elements = ['El 1', 'El 2', 'El 3'];
const shifted = elements.shift();
// shift() remove o primeiro elemento
// do array (pop só que inverso)
show(elements);
show(shifted);
elements.push('El 4');
// push() adiciona um elemento,
// tipo o append do python
show(elements);

elements.unshift(shifted);
// unshift() mesma coisa que o push(),
// mas adiciona no começo
show(elements);
// unshift e shift são menos recomendados,
// pois eles mudam todos os índices do array
const slicedEl = elements.slice(0, 2);
// slice(x, y) fatia do índice x e pega
// o índice anterior ao y
//
// exemplo:
// slice(0, 2) vai pegar os índices 0 e 1
show(slicedEl);

const slicedEl2 = elements.slice(0, -1);
// retira do final y números, quando
// o y é negativo
show(slicedEl2);

const ceci = 'Cecília Oliveira Cabral'
const nameSplitted = ceci.split(' ');
// split() separa o valor por algo,
//
// exemplo:
// ceci foi separada em cada espaço
// em branco (' ') que tinha no nome
show(nameSplitted);

const nameSplitJoin = nameSplitted.join('. . .');
// join() junta os valores com um
// valor em si, como no nome acima,
// juntou adicionando espaços em
// branco (' ') todos os valores
show(nameSplitJoin);
