let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
/** let id_pelicula = qs; **/
let qsObj = new URLSearchParams(qs);
console.log(qsObj);
let id_serie = qsObj.get('id');
console.log(id_serie)

let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`
let titulo = document.querySelector(".titulo-peli-descripcion")
let imagenDetalle = document.querySelector(".imgDetalles")
let calificacion = document.querySelector("#calificacion")
let fecha = document.querySelector("#fecha")
let duracion = document.querySelector("#duracion")
let sinopsis = document.querySelector("#sinopsis")
let genero = document.querySelector("#genero")

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
   titulo.innerText = data.original_name
   imagenDetalle.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
   calificacion.innerText = data.vote_average
    fecha.innerText = data.first_air_date
    sinopsis.innerText = data.overview
    genero.innerText = data.genres[0].name

})
.catch(function(err){
    console.log(err)
}
);
