var rafa = {nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1,  pontos: 0 };

var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0};


function calculaPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
//gui.pontos = calculaPontos(gui)

var jogadores = [rafa, paulo];
console.log(jogadores)

function exibeJogadoresTela (jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas +  "</td>";
        elemento += "<td>" + jogadores[i].pontos +  "</td>";
        elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>";
        elemento += "</tr>";
    }
    console.log(elemento)
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresTela(jogadores);