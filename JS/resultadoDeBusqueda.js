window.onload = function (){
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
  //año
  fetch ('https://api.themoviedb.org/3/discover/tv?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
console.log(data);
var select = document.querySelector ('#año')
      var año = data.results;
      for (var i = 0; i < año.length; i++) {
         select.innerHTML += '<option>'+ data.results[i].first_air_date +'</option>';
      }
    })
    .catch(function(error) {
    console.log(error)
  })
}
