let umaString = 'Um texto'

console.log('>> Encontrar índicies');

console.log(umaString.indexOf('texto')); // Mostra o índice que inicia a string pedida ('texto')
console.log(umaString.indexOf('Cecis')); // Não encontra a string = -1
console.log(umaString.indexOf('t', 3)); // Encontra o índice da string a partir de um índice
console.log(umaString.indexOf('t', 4));

console.log();

console.log(umaString.lastIndexOf('t', 5)); // Procura o índice da direita pra esquerda
console.log(umaString.lastIndexOf('t', 2));

console.log('>> Encontrar e substituir índicies');

console.log(umaString.search(/[a-z]/)); // Mostra o índice da primeira letra de a-z

console.log(umaString.replace('Um', 'Em outro')) // Substitui o primeiro valor pelo próximo
console.log(umaString.replace(/t/g, '#')); // Substitui as letras t por # (caso tenha a flag g)

console.log('>> Tamanho e fatiamento de strings');

console.log(umaString.length); // Tamanho da string (tipo o len(x) do python)
console.log(umaString.slice(3, 8)); // Fatia a partir de um índice e termina no antecessor do outro
console.log(umaString.slice(-3)); // Valor negativo = começa pelo final da string

console.log('>> Separação da string');

console.log(umaString.split(' ')); // Separa o texto do valor 
console.log(umaString.split('t')); 
console.log(umaString.split(' ', 1)) // Separa o texto do valor em tantas vezes (no caso 1)