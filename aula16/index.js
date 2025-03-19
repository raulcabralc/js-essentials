// array = lista
const alunos = ['Raul', 'Cecília', 'José', 'Maria'];
console.log(alunos);
console.log(alunos.length);

alunos[0] = 'André'; // Substitui o índice selecionado
alunos[3] = 'Larissa'; // Índice 3 não existia, então adiciona

console.log(alunos);

alunos[alunos.length] = 'Eduardo';
alunos[alunos.length] = 'Letícia';
alunos[alunos.length] = 'Plínio'; // Adicionando nomes na lista (pode ser usado em loops)

console.log(alunos);

alunos.push('Bacon'); // Adiciona o nome no final
alunos.unshift('Tânia'); // Adiciona o nome no começo

console.log(alunos);

alunos.pop(); // Remove o nome do final
alunos.shift(alunos); // Remove o nome do começo

console.log(alunos);

delete alunos[1]; // Deleta o item, mas deixa seu espaço vazio

console.log(alunos);

console.log(alunos.slice(0, -3));
console.log(alunos instanceof Array); // Verificar se alunos é array

console.log(alunos[3][1]); // L>a<rissa