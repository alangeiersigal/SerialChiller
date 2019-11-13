window.onload = function (){
  // Las q quiero
  fetch ('https://api.themoviedb.org/3/genre/tv/list?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
console.log(data);
var select = document.querySelector ('#quieroBuscar')
      var generos = data.genres;
      for (var i = 0; i < generos.length; i++) {
         select.innerHTML += '<option>'+ data.genres[i].name + '</option>';
      }
    })
    .catch(function(error) {
    console.log(error)
  })
  //las que no quiero
  fetch ('https://api.themoviedb.org/3/genre/tv/list?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
console.log(data);
var select = document.querySelector ('#excluyo')
      var generos = data.genres;
      for (var i = 0; i < generos.length; i++) {
         select.innerHTML += '<option>'+ data.genres[i].name + '</option>';
      }
    })
    .catch(function(error) {
    console.log(error)
  })
  //orden q quiero q aparezcan

  //anio
  var datos = new URLSearchParams(location.search);
var anio = datos.get('anio')
//cuando apreto que quiero q pase
var quieroGeneros = datos.get('quierobuscar')
var excluyoGeneros = datos.get("excluyo")
console.log(quieroGeneros);
console.log("------------------------")
var orden = datos.get ('orden');
fetch ("https://api.themoviedb.org/3/discover/tv?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&sort_by="+ orden +"&popularity.desc&first_air_date_year="+ anio +"&page=1&timezone=America%2FNew_York&with_genres="+ quieroGeneros +"&without_genres="+ excluyoGeneros +"&include_null_first_air_dates=false")
.then(function(response) {
    return response.json();
  })
  .then (function (data){
    var fotos = respuesta.results
    var cambioElH1 = document.querySelector("h1")
    cambioElH1.innerHTML = "This are the results ";
    for (var i = 0; i < fotos.length; i++) {
      document.querySelector(".pelis").innerHTML += "<div class='imgcontainer'><a href='generos.html?genreid=" + respuesta.results[i].id + "'><img src='http://image.tmdb.org/t/p/original"+ respuesta.results[i].poster_path + "'>"
    }
  })
  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })

}
