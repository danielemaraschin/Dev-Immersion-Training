function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    listarFilmeNaTela(filmeFavorito);
    document.getElementById("filme").value = "";
    //independente se mandar certo ou nao a imagem, vai limpar o campo.
}

function listarFilmeNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    console.log(elementoListaFilmes)
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    //vai add o elementoFilmeFavorito dentro do elementoListaFilmes, no HTML
}