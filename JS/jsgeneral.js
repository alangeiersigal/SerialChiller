window.addEventListener("load", function() {

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=46aea19a7447a9c4b1cd03a96834279e&language=en-US")
  .then(function(response) {
    return response.json()
  })
  .then(function (data) {
   // console.log(data);
   var generos = data.genres;
   var arrayDropdown = document.querySelectorAll(".dropdown-content")
   var listadoDeGeneros = ""
   for (var x = 0; x < arrayDropdown.length; x++) {
     for (var i = 0; i < generos.length; i++) {
       listadoDeGeneros += "<a href=generos.html?idgenres=" + data.genres[i].id + "&nameGenre=" + data.genres[i].name + ">" + data.genres[i].name + "</a>";
     }
     arrayDropdown[x].innerHTML = listadoDeGeneros
   }

  })
  .catch(function(error) {
   // console.log("Error: " + error);
  })
  // tratando de q ande el buscador//

  var datos = new URLSearchParams(location.search);
  console.log(datos);
  var loBuscado = datos.get("buscador");
  console.log(loBuscado);

  if (loBuscado != null) {
    if (loBuscado.length >= 3) {
      fetch("https://api.themoviedb.org/3/search/tv?api_key=46aea19a7447a9c4b1cd03a96834279e&query=" + loBuscado)
      .then(function(response) {
        return response.json();
      })
      .then(function(respuesta) {
        // console.log(respuesta);
        var fotos = respuesta.results
        var cambioElH1 = document.querySelector("h1")
        cambioElH1.innerHTML = "This are the results for " + loBuscado;
        for (var i = 0; i < fotos.length; i++) {
          document.querySelector(".pelis").innerHTML += "<div class='imgcontainer'><a href='detalles.html?id=" + respuesta.results[i].id + "'><img src='http://image.tmdb.org/t/p/original"+ respuesta.results[i].poster_path + "'>"
        }
      })
      // setTimeout(function(){ x.value = "2 seconds" }, 2000)

      }
  // arranca el js del alert
      else {
      document.querySelector(".hola").style.display = "block";
      setTimeout(function(){
        document.querySelector(".hola").style.display = "none"
      }, 3000);
      // TERMINA EL JS DEL ALERT. EL SET TIME OUT LO SACAMOS DE UIKIT, DE LA PARTE DE ALERTS.
    }
  }
})
