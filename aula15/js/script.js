const num = Number(prompt('Digite um número'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
// Usar += para adicionar o texto, usar = para substituir um texto!!!
texto.innerHTML = `<p>Seu número +2 é igual a ${num + 2}.</p>`;
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(num)}<br />`;
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br />`;
document.body.innerHTML += `É NaN: ${Number.isNaN(num)}<br />`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br />`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)}<br />`;
document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br />`;