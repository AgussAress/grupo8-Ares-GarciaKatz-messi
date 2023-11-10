let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
let pelisDetalles = document.querySelector("#pelisDetalles")
/** let id_pelicula = qs; **/
let qsObj = new URLSearchParams(qs)
console.log(qsObj);
let id_pelicula = qsObj.get("id")
console.log(id_pelicula)

let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`
let imagenDetalle = document.querySelector("#imagenDetalle")

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(data){
    let contenido = ""
    imagenDetalle.innerText = `${data.poster_path}`
})
.catch(function(err){
    console.log(err)
}
);