function adicionarFilme() {

    var campoFilmeFavorito = document.getElementById("filme").value;
    var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHtml =  elementoListaFilmes.innerHtml + elementoFilmeFavorito
//vai add o elementoFilmeFavorito dentro do elementoListaFilmes, no HTML.

}
