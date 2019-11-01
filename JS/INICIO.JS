window.onload = function (){
  console.log(4);
  fetch ('https://api.themoviedb.org/3/tv/popular?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US&page=1')
.then(function(response) {
      return response.json();
    })
    .then (function (data){
      console.log(data);
      var series = data.results;

      for (var i = 0; i < series.length; i++) {
        document.querySelector ('ul.populares').innerHTML += `
            '<li><div class="uk-panel"><img src='+'data.poster_path[i]'+ '><div class="uk-position-center uk-panel"></div></div></li>';'
      }

    })
}
