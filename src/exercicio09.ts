// Escreva um script que receba um valor constante de uma temperatura em graus Fahrenheit, 
// calcular e mostrar no console o valor correspondente em graus Celsius 
// (baseado na fórmula): Cº = ((Fº − 32) / 9) * 5

var tempF:number = 150;
var tempC:number = ((tempF - 32)/9)*5;
var formatar = new Intl.NumberFormat("pt-br", {
    style: "decimal",
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
console.log(formatar.format(tempF),"°F = ",formatar.format(tempC),"°C");