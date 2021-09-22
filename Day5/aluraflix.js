function adicionarFilme() {

    console.log('clicado')
    var filmeFavorito = document.getElementById("filme").value;
    var filmeFavorito = "<img src=" + filmeFavorito + ">";
    console.log(filmeFavorito);
    var elementoListaFilmes = document.getElementById("listaFilmes");
    console.log(elementoListaFilmes);
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + filmeFavorito;
    document.getElementById("filme").value = "";
    //vai add o elementoFilmeFavorito dentro do elementoListaFilmes, no HTML.
}
