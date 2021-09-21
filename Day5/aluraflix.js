function adicionarFilme() {

    console.log('clicado')
    var campoFilmeFavorito = document.getElementById("filme").value;
    var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
    console.log(elementoFilmeFavorito);
    var elementoListaFilmes = document.getElementById("listaFilmes");
    console.log(elementoListaFilmes);
    elementoListaFilmes.innerHtml = elementoListaFilmes.innerHtml + elementoFilmeFavorito;
    document.getElementById("filme").value = "";
    //vai add o elementoFilmeFavorito dentro do elementoListaFilmes, no HTML.
}
