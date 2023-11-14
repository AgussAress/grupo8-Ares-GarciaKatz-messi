let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
/** let id_pelicula = qs; **/
let qsObj = new URLSearchParams(qs);
console.log(qsObj);
let id_pelicula = qsObj.get('id');
console.log(id_pelicula)

let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`
let titulo = document.querySelector(".titulo-peli-descripcion")
let imagenDetalle = document.querySelector("#imagenDetalle")
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
   titulo.innerText = data.title
   imagenDetalle.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
   calificacion.innerText = data.vote_average
    fecha.innerText = data.release_date
    duracion.innerText = data.runtime
    sinopsis.innerText = data.overview
    genero.innerText = data.genres[0].name

})
.catch(function(err){
    console.log(err)
}
);
