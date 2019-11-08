window.addEventListener("load", function() {

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US")
  .then(function(response) {
   return response.json()
  })
  .then(function (data) {
   console.log(data);
   var generos = data.genres;
   var dropdown = document.querySelector(".dropdown-content")
   for (var i = 0; i < generos.length; i++) {
     dropdown.innerHTML += "<a href=generos.html?idgenres=" + data.genres[i].id + "&nameGenre=" + data.genres[i].name + ">" + data.genres[i].name + "</a>";
   }

  })
  .catch(function(error) {
   console.log("Error: " + error);
  })






})
