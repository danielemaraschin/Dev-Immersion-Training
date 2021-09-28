var carta1 = { nome: "Bulbassauro", atributos: { ataque: 7, defesa: 8, magia: 6 } };
var carta2 = { nome: "Mewtwo", atributos: { ataque: 9, defesa: 7, magia: 9 } };
var carta3 = { nome: "Psyduck", atributos: { ataque: 5, defesa: 7, magia: 10 } };


var cartaMaquina
var cartaJogador = 0


var cartas = [carta1, carta2, carta3];


function sortearCarta() {

    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
//numeroCartaMaquina e numeroCartaJogador: esse numero é o índice da lista var cartas, sendo possivel os indices 0,1 E 2 já é x3 e é 
//multiplicado por 3, por que sao 3 elementos: carta1, carta2 e carta3

    var numeroCartaJogador = parseInt(Math.random() * 3)

    while (numeroCartaMaquina == numeroCartaJogador) { //quando essa sentença nos parenteses for falsa, sai do while e nao eh mais executdo
        var numeroCartaJogador = parseInt(Math.random() * 3) //não quero que a carta da maquina e do jogador sejam a mesma
    }

    cartaJogador = cartas[numeroCartaJogador] //cartaJogador = cartas[i] como se fosse no indice desse array chamado 'cartas'

    console.log(cartaMaquina)
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true; //depois que clicar sortear, nao pode sortear de novo
    document.getElementById("btnJogar").disabled = false;//dps de clicar sortear, aí que fica disponivel jogar
    exibirOpcoes()
}


function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = "";
        //in é dentro da lista, no nosso caso carta jogador é um objto
    for (var indiceAtributos in cartaJogador.atributos) { //var indiceAtributos estamos declarando aqui, é uma var nova, seria como o 'i'no for 
        opcoesTexto += "<input type='radio'name='atributo' value='" + indiceAtributos + "'/>" + indiceAtributos; //escrevendo HTML no js pq se dps 
//quisermos add mais atributos nos personagens, ja vai add automaitcamente no HTML. Podiamos add no HTML direto mas ao add mais atributos no futuro, 
//iriamos precisar add no HTML tb e add no js direto, ele ja faz automatico
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) { //passa por todos os atributos que estao na tag com nome 'atributo'
        if (radioAtributos[i].checked == true) { //verifica qual input radio estÁ SELECIONADO --pode so colocar .checked , nao precisa colocar o true.
            return radioAtributos[i].value //seleciona o valor que está no atributo do indice que foi selecionado
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado")
    console.log(atributoSelecionado);
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você venceu.";
    }else if(valorCartaMaquina> valorCartaJogador) {
        elementoResultado.innerHTML = "Você perdeu, o valor da carta do outro jogador é maior.";
    }else{
        elementoResultado.innerHTML = "empatou.";
    }
    console.log(cartaMaquina)

    //nao poderia colocar cartaJogador.atributos.atributoSelecionado pq o console vai varrer o carta jogador, entrar dentro dos atributos
    //e dentro dos atributos (chave atributo) iria procurar o atributoSelecionado, mas nao existe. 
    //Para acessarmos a var atributoSelecionado
    //mesma sintaxe q as listas, mas atributos eh objeto e nao lista

}

