var carta1 = {nome: "Bulbassauro", atributos: {ataque: 7, defesa: 8, magia: 6 }};
var carta2 = {nome: "Mewtwo", atributos: {ataque: 9, defesa: 7, magia: 9 }};
var carta3 = {nome: "Psyduck", atributos: {ataque: 5, defesa: 7, magia: 10 }};


var cartaMaquina 
var cartaJogador = 0


var cartas = [carta1, carta2, carta3];


function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3)

  cartaMaquina = cartas[numeroCartaMaquina]
  console.log(cartaMaquina)
  }
  