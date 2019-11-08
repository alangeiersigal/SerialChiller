var numeroDePagina = 1;

window.onload = function() {
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    var nombre = data.genres;
    var cambioElH1 = document.querySelector("h1")
    for (var i = 0; i < nombre.length; i++) {
    cambioElH1.innerHTML = "Estos son los resultados de " + data.genres.name

    }
  })


  fetch("https://api.themoviedb.org/3/discover/tv?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
  .then(function(response) {
   return response.json()
  })
  .then(function(data) {
   console.log(data);
   var contenedorDeImagenes = document.querySelector(".pelis");
   var imagenesDePelis = data.results;
   for (var i = 0; i < imagenesDePelis.length; i++) {
     contenedorDeImagenes.innerHTML += "<div class='imgcontainer'><a href='generos.html?genreid=" + data.results[i].id + "'><img src='http://image.tmdb.org/t/p/original"+ data.results[i].poster_path + "'>"
   }

 })
  window.onscroll = detectarScroll;


}

function detectarScroll() {
  if (numeroDePagina < 500) {
    var finalDePagina = document.querySelector(".cambiapaginas");

    if (isScrolledIntoView(finalDePagina)) {
      window.onscroll = function() {}
      numeroDePagina++;


      fetch("https://api.themoviedb.org/3/discover/tv?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&sort_by=popularity.desc&page="+ numeroDePagina +"&timezone=America%2FNew_York&include_null_first_air_dates=false")
  .then(function(response) {
    return response.json();
  })
  .then(function(resultados) {
    var imagenesDePelis = data.results;
    for (var i = 0; i < imagenesDePelis.length; i++) {
      contenedorDeImagenes.innerHTML += "<div class='imgcontainer'><a href='generos.html?genreid=" + data.results[i].id + "'><img src='http://image.tmdb.org/t/p/original"+ data.results[i].poster_path + "'>"
    }
      window.onscroll = detectarScroll();
  })

    }
  }

}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
