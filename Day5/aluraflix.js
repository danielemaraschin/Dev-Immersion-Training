function adicionarFilme() {

    var filmeFavorito = document.getElementById("filme").value;

    if(filmeFavorito.endsWith(".jpg")){
        var elementofilmeFavorito = "<img src=" + filmeFavorito + ">"; 
        var elementoListaFilmes = document.getElementById("listaFilmes");
       
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementofilmeFavorito;
        //vai add o elementoFilmeFavorito dentro do elementoListaFilmes, no HTML
    }else{
        console.error("Adicione uma img")
        //fica vermelho no formato de erro.
    }

    document.getElementById("filme").value = "";
    //independente se mandar certo ou nao a imagem, vai limpar o campo.
}
