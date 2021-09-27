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

  document.getElementById("btnSortear").disabled= true;
  document.getElementById("btnJogar").disabled= false; 
  exibirOpcoes()
}


function exibirOpcoes(){
    var opcoes =  document.getElementById("opcoes")
    var opcoesTexto = "";
                                                        //in é dentro da lista
    for(var indiceAtributos in cartaJogador.atributos) { //var indiceAtributos estamos declarando aqui, var nova, como o 'i'no for 
        opcoesTexto += "<input type='radio'name='atributo' value='" +indiceAtributos + "'/>" + indiceAtributos ; //escrevendo HTML no js
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");

    for(var i= 0; i< radioAtributos.length; i++) { //passa por todos os atributos que estao na tag com nome 'atributo'
        if(radioAtributos[i].checked == true){ //verifica qual input radio estÁ SELECIONADO --pode so colocar .checked , nao precisa colocar o true.
            return radioAtributos[i].value //seleciona o valor que está no atributo do indice que foi selecionado
        }
    }    
}

function jogar(){
    console.log("Botão jogar foi clicado");
    var atributoSelecionado = obtemAtributoSelecionado();
    console.log(atributoSelecionado);
}