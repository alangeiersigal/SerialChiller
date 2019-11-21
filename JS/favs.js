window.onload = function() {
  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("series");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    var series = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    var series = JSON.parse(recuperoStorage);
  }

  for (var i = 0; i < series.length; i++) {
    // BUSCAR ESE GIF Y MOSTRARLO
    fetch("https://api.themoviedb.org/3/tv/"+ series[i] + "?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US")
      .then(function(response) {
        return response.json();
      })
      .then(function(laSerie) {
        console.log(laSerie);
      document.querySelector(".pelis").innerHTML += "<div class='imgcontainer'><a href='detalles.html?id=" + laSeries.results.id + "'><img src='http://image.tmdb.org/t/p/original"+ laSerie.results.poster_path + "'>";
//       })
  }
}
