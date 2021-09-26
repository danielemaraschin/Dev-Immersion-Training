var carta1 = {nome: "Bulbassauro", atributos: {ataque: 7, defesa: 8, magia: 6 }};
var carta2 = {nome: "Mewtwo", atributos: {ataque: 9, defesa: 7, magia: 9 }};
var carta3 = {nome: "Psyduck", atributos: {ataque: 5, defesa: 7, magia: 10 }};


var cartaMaquina 
var cartaJogador = 0


var cartas = [carta1, carta2, carta3];


function sortearCarta(){

  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  
    while(numeroCartaMaquina == numeroCartaJogador){ //quando essa sentença nos parenteses for falsa, sai do while e nao eh mais executdo
       var numeroCartaJogador = parseInt(Math.random() * 3)
    }
    
  cartaJogador = cartas[numeroCartaJogador]
  
  

  console.log(cartaMaquina)
  console.log(cartaJogador)
}
  