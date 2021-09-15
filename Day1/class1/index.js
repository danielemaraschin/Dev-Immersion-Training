var nome = "Dani";
console.log("Bem vindo " + nome);

var notaPrimeiroBimestre = 9.5;
var notaSegundoBimestre = 5.5;
var notaTerceiroBimestre = 7.5;
var notaQuartoBimestre = 6.6;

var notaFinal =
  (notaPrimeiroBimestre +
    notaSegundoBimestre +
    notaTerceiroBimestre +
    notaQuartoBimestre) /
  4;

var NotaArredondada = notaFinal.toFixed(1);