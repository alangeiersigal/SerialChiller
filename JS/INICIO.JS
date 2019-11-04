window.onload = function (){
  // console.log(4);
  fetch ('https://api.themoviedb.org/3/tv/popular?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&page=1')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
      console.log(data);
      var series = data.results;
      var ul = document.querySelector('#populares');
      var li = '';
      for (var i = 0; i < series.length; i++) {
         ul.innerHTML +="<li><a href='detalle.html?id=" + data.results[i].id + "'><div class='uk-panel'><img src='https://image.tmdb.org/t/p/original"+ series[i].poster_path + "'><div class='uk-position-center uk-panel'></div></div></li></a></li>";
      }
    })
    .catch(function(error) {
    console.log(error)
  })
  fetch ('https://api.themoviedb.org/3/tv/top_rated?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&page=1')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
      console.log(data);
      var series = data.results;
      var ul = document.querySelector('#recomendadas');
      var li = '';
      for (var i = 0; i < series.length; i++) {
         ul.innerHTML +="<li><a href='detalle.html?id=" + data.results[i].id + "'><div class='uk-panel'><img src='https://image.tmdb.org/t/p/original"+ series[i].poster_path + "'><div class='uk-position-center uk-panel'></div></div></li></a></li>";
      }
    })
    .catch(function(error) {
    console.log(error)
  })
  fetch ('https://api.themoviedb.org/3/tv/airing_today?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&page=1')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
      console.log(data);
      var series = data.results;
      var ul = document.querySelector('#vivo');
      var li = '';
      for (var i = 0; i < series.length; i++) {
         ul.innerHTML +="<li><a href='detalle.html?id=" + data.results[i].id + "'><div class='uk-panel'><img src='https://image.tmdb.org/t/p/original"+ series[i].poster_path + "'><div class='uk-position-center uk-panel'></div></div></li></a></li>";
      }
    })
    .catch(function(error) {
    console.log(error)
  })
}
