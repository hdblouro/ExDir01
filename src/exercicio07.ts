// Escreva um script que receba valores constantes para o número total de eleitores de um município, 
// o número de votos brancos, nulos e válidos. Calcular e mostrar no console o percentual que cada 
// um desses números representa em relação ao total de eleitores.

var eleitores: number = 20000;
var brancos: number = 1500;
var nulos: number = 500;
var validos: number = 18000;
var percentual = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
});
console.log(`Quantidade de eleitores.: ${eleitores}`);
console.log(`Total de votos em branco: ${brancos}`, "-", percentual.format(brancos / eleitores));
console.log(`Total de votos nulos....: ${nulos}`, "-", percentual.format(nulos / eleitores));
console.log(`Total de votos válidos..: ${validos}`, "-", percentual.format(validos / eleitores));
