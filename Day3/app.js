var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);


function Chutar() {
  var elementoResultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    console.log("Você deve digitar um número entre 0 e 10");
  } else {
    console.log("errou");
  }
}
