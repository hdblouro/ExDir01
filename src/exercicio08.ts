// Escreva um script que receba valores constantes do salário mensal atual de um funcionário 
// e o percentual de reajuste que ele tem direito. Calcular e mostrar no console o valor do 
// novo salário, além do valor do salário antigo.

var salario: number = 5000;
var perc: number = 0.05;
var reajuste: number = salario * perc;
var novosalario: number = salario + reajuste;
var percentual = new Intl.NumberFormat("pt-br", {
  style: "percent",
  minimumFractionDigits: 2,
});
var formatar = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: 'BRL',
  minimumFractionDigits: 2,
});
console.log("Percentual de Reajuste....:", percentual.format(perc));
console.log("(+) Salário Atual.........:", formatar.format(salario));
console.log("(+) Reajuste..............:", formatar.format(reajuste));
console.log("(=) Salário Novo..........:", formatar.format(novosalario));

