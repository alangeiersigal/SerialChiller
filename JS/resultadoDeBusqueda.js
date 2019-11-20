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
  var datos = new URLSearchParams(window.location.search);
  var quieroGeneros = datos.get("quieroBuscar")
  var excluyoGeneros = datos.get("excluyo")
  var orden = datos.get ('orden')
  var anio = datos.get('anio')
console.log(quieroGeneros);
//cuando envio los datos del form, debo validar
// if (quieroGeneros != null) {
var todosTienenData = quieroGeneros != "vacio" && excluyoGeneros != "vacio" && orden != "vacio" && anio != "vacio";
var todosMenosQuiero = quieroGeneros == "vacio" && excluyoGeneros != "vacio" && orden != "vacio" && anio != "vacio";
var todosMenosExcluyo = quieroGeneros != "vacio" && excluyoGeneros == "vacio" && orden != "vacio" && anio != "vacio";
var todosMenosOrden = quieroGeneros != "vacio" && excluyoGeneros != "vacio" && orden == "vacio" && anio != "vacio";
var todosMenosAnio = quieroGeneros != "vacio" && excluyoGeneros != "vacio" && orden != "vacio" && anio == "vacio";
var todosMenosQuieroyExcluyo = quieroGeneros == "vacio" && excluyoGeneros == "vacio" && orden != "vacio" && anio != "vacio";
var todosMenosQuieroyOrden = quieroGeneros == "vacio" && excluyoGeneros != "vacio" && orden == "vacio" && anio != "vacio";
var todosMenosQuieroyAnio = quieroGeneros == "vacio" && excluyoGeneros != "vacio" && orden != "vacio" && anio == "vacio";
var todosMenosExcluyoyOrden = quieroGeneros != "vacio" && excluyoGeneros == "vacio" && orden == "vacio" && anio != "vacio";
var todosMenosExcluyoyAnio = quieroGeneros != "vacio" && excluyoGeneros == "vacio" && orden != "vacio" && anio == "vacio";
var todosMenosOrdenyAnio = quieroGeneros != "vacio" && excluyoGeneros != "vacio" && orden == "vacio" && anio == "vacio";
var aniosolo = quieroGeneros == "vacio" && excluyoGeneros == "vacio" && orden == "vacio" && anio != "vacio"
var todoVacio = quieroGeneros == "vacio" && excluyoGeneros == "vacio" && orden == "vacio" && anio == "vacio";

// if (todosTienenData||todosMenosQuiero||todosMenosExcluyo||todosMenosOrden||todosMenosAnio||todosMenosQuieroyExcluyo || todosMenosQuieroyOrden || todosMenosQuieroyAnio||todosMenosExcluyoyOrden||todosMenosExcluyoyAnio||todosMenosOrdenyAnio || aniosolo) {

  //condiciones:
  // 1) el campo de generos debe ser diferente al campo de genereos a excluir
  // 2) quieroGeneros = excluyoGeneros = vacio pero orden != vacio
  //3) quieroGeneros = excluyoGeneros = vacio pero anio != vacio
  // if (quieroGeneros != excluyoGeneros){
    // Le saco el null a todos y le digo vacio
    if (quieroGeneros != null) {
    if (quieroGeneros == "vacio" && excluyoGeneros == "vacio" && orden == "vacio" && !anio) {
      alert ("Completa algun campo porfavor")

    }else {
      if (quieroGeneros == excluyoGeneros && quieroGeneros != "vacio" && excluyoGeneros !="vacio" ){
        alert ("No podes excluir y querer un mismo genero!")
      }else {
        if (quieroGeneros == "vacio" && excluyoGeneros == "vacio" && orden != "vacio" && anio == "") {



      console.log(quieroGeneros,excluyoGeneros,orden,anio);


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

     document.querySelector(".oculto").style.display= "block";

        }
        })
} else {
  alert ("No tiene sentido buscar solo por orden!")
}
      }
      }
    }
      // }
}
  //     }else if(quieroGeneros == excluyoGeneros && anio == 'vacio' && orden == ''){
  //       alert ("No podes excluir y querer un genero a la vez!")
  //     }else{
  //       alert ("Porfavor, completa algun campo!")
  //     }
  // }else  {
  //   alert ("Porfavor, completa algun campo!")
  // }
// document.querySelector("button").addEventListener ("click", function (event)) {
//   event.preventDefault();
// }
