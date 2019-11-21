window.onload = function() {

var idSeries = new URLSearchParams(window.location.search).get('id')
console.log(idSeries);

fetch("https://api.themoviedb.org/3/tv/" + idSeries + "?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US")
.then(function(response) {
 return response.json()
})
.then(function(objetoSerie) {
  console.log(objetoSerie);
  var añoDeSerie = objetoSerie.first_air_date;
  document.querySelector("b.estreno").innerHTML = "Fecha de estreno:" + " " + añoDeSerie;
  var nombreDeSerie = objetoSerie.name;
  document.querySelector("h1").innerHTML = nombreDeSerie;
  var idiomaDeSerie = objetoSerie.original_language;
  document.querySelector("b.idioma").innerHTML = "idioma:" + " " + idiomaDeSerie;
  var ratingDeSerie = objetoSerie.vote_average;
  document.querySelector("b.popularidad").innerHTML = "Popularidad:" + " " + ratingDeSerie;
  document.querySelector(".poster-container").innerHTML = "<img src='http://image.tmdb.org/t/p/original" + objetoSerie.poster_path + "'>"

  var descripcionDeSerie = objetoSerie.overview;
  document.querySelector("p.descripcion").innerHTML = descripcionDeSerie;
  var arrayDeGeneros = objetoSerie.genres;
  document.querySelector("b.generos").innerHTML = "Generos: "
  for (var i = 0; i < arrayDeGeneros.length; i++) {

    document.querySelector("b.generos").innerHTML += "<a href='generos.html?idgenres='"+arrayDeGeneros[i].id+"&nameGenre="+arrayDeGeneros[i].name+">" + arrayDeGeneros[i].name + " " + '</a>';
  }
})

//empiezo con el modal//

fetch("https://api.themoviedb.org/3/tv/"+ idSeries +"/videos?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US")
.then(function(response) {
 return response.json()
})
.then(function(trailerData) {
  console.log(trailerData);
  console.log(trailerData);
  var videoKey = trailerData.results[0].key;
  document.querySelector(".modal-content").innerHTML = "<span class='close-button'>&times</span><iframe class='video' width='90%' height='90%' src='https://www.youtube.com/embed/" + videoKey + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen><iframe>"
  console.log("https://www.youtube.com/embed/" + videoKey);
})
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal-button");
var closeButton = document.querySelector(".close-button");

modalButton.onclick = abrirModal;
closeButton.onclick = cerrarModal;

function abrirModal() {
  modal.style.display = "block";
}

function cerrarModal() {
  modal.style.display = "none";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
    }
};
//empieza recomendaciones//

fetch("https://api.themoviedb.org/3/tv/" + idSeries + "/recommendations?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&page=1")
.then(function(response) {
 return response.json()
})
.then(function(recomdata) {
 console.log(recomdata);
 var recomContainer = document.querySelector(".recom-container")
 var recomendacion = recomdata.results;
 recomContainer.innerHTML = "<a class='recom-photo' href='detalles.html?id=" + recomdata.results[0].id + "'><img src='http://image.tmdb.org/t/p/original"+ recomdata.results[0].poster_path + "'>"
})

}







//EMPIEZO CON favoritos
// var recuperoStorage = localStorage.getItem("series");
//
//   // Si todavía no tenía gifs favoritos
//   if (recuperoStorage == null) {
//     // Creo una lista vacia
//     series = [];
//   } else {
//     // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
//     series = JSON.parse(recuperoStorage);
//   }
//
//   var datos = new URLSearchParams(location.search);
//   var idfav = datos.get("idSeries");
//
//   if (series.includes(idfav)) {
//     document.querySelector(".fav-button").innerHTML = "QUITAR DE FAVORITOS";
//   }
//
//
//   //
// fetch("https://api.themoviedb.org/3/tv/" + idSeries + "?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(gif) {
//       document.querySelector("h1").innerHTML = gif.data.title;
//       document.querySelector("img").src = gif.data.images.original.url;
//     })
//   //
//     document.querySelector(".fav-button").onclick = function() {
//
//
//       //Paso 2: Modificar la informacion
//       // Si el gif ya era favorito
//       if (series.includes(idfav)) {
//         // Lo quito
//         var index = series.indexOf(idfav);
//         series.splice(index, 1);
//         document.querySelector(".fav-button").innerHTML = "AGREGAR FAVORITO";
//       } else {
//         //Lo agrego
//         series.push(idfav);
//         document.querySelector(".fav-button").innerHTML = "QUITAR DE FAVORITOS";
//       }
//
//
//       //Paso 3: Escribir en storage
//       var infoParaStorage = JSON.stringify(series);
//       localStorage.setItem("series", infoParaStorage);
//       console.log(localStorage);
// // fetch("https://api.themoviedb.org/3/tv/"+ idSeries +"/videos?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US
// // ")
// // .then(function(response) {
// //  return response.json()
// // })
// // .then(function(trailerData) {
// //
// // })
