window.onload = function (){
  // Las q quiero
  fetch ('https://api.themoviedb.org/3/genre/tv/list?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
// console.log(data);
var select = document.querySelector ('#quieroBuscar')
      var generos = data.genres;
      for (var i = 0; i < generos.length; i++) {
         select.innerHTML += '<option value='+data.genres[i].id+'>'+ data.genres[i].name + '</option>';
      }
    })
    .catch(function(error) {
    // console.log(error)
  })
  //las que no quiero
  fetch ('https://api.themoviedb.org/3/genre/tv/list?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
// console.log(data);
var select = document.querySelector ('#excluyo')
      var generos = data.genres;
      for (var i = 0; i < generos.length; i++) {
         select.innerHTML += '<option value='+data.genres[i].id+'>'+ data.genres[i].name + '</option>';
      }
    })
    .catch(function(error) {
    // console.log(error)
  })
  //orden q quiero q aparezcan

  //anio
  var datos = new URLSearchParams(location.search);
  var quieroGeneros = datos.get("quieroBuscar")
  var excluyoGeneros = datos.get("excluyo")
  var orden = datos.get ('orden')
var anio = datos.get('anio')
if (quieroGeneros != "vacio" && excluyoGeneros != "vacio" && orden != "vacio" && anio != "vacio") {
if (quieroGeneros != excluyoGeneros){
// Le saco el null a todos y le digo vacio
if(anio != "vacio"){
  anio = '&first_air_date_year=' + anio
}else {
  anio = "";
}
if (excluyoGeneros != "vacio") {
  excluyoGeneros = "&without_genres=" + excluyoGeneros
} else {
  excluyoGeneros = ""
}
if (quieroGeneros != "vacio"){
  quieroGeneros = "&with_genres=" + quieroGeneros
}else {
  quieroGeneros = ""
}
if (orden != "vacio"){
  orden =  "&sort_by=" + orden
}else {
  orden = ""
}
fetch ("https://api.themoviedb.org/3/discover/tv?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US"+ orden + anio + quieroGeneros + excluyoGeneros)
.then(function(response) {
    return response.json();
  })
  .then (function (data){
    console.log(data);
    var fotos = data.results
    for (var i = 0; i < fotos.length; i++) {
      document.querySelector(".oculto").innerHTML += "<a href='resultadoDeBusqueda.html?genreid=" + data.results[i].id + "'><img src='http://image.tmdb.org/t/p/original" + data.results[i].poster_path + "'>";
// document.querySelector (option).innerHTML =
 document.querySelector(".oculto").style.display= "block";

    }
  })
}else {
  alert ("No podes excluir y querer un genero a la vez!")
}
}else {
  alert ("Porfavor, completa algun campo!")
}
}
