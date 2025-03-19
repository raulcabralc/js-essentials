/*
const tresHoras = 60 * 60 * 3 * 1000; // JS conta em milesimos de segundo
const date = new Date(0 + tresHoras);
*/
const date = new Date(2017, 5, 27, 15, 60);
// o mês é passado com um valor a menos, ex: abril é mes 3 para o JS

console.log(date.toString());
console.log('Dia >', date.getDate());
console.log('Mês >', date.getMonth() + 1); // Mês começa do 0
console.log('Ano >', date.getFullYear());
console.log('Hora >', date.getHours());
console.log('Minuto >', date.getMinutes());
console.log('Segundo >', date.getSeconds());
console.log('Dia Semana >', date.getDay()); // 0 - Domingo, 2 - Terça