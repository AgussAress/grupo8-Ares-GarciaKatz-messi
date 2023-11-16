let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
/** let id_pelicula = qs; **/
let qsObj = new URLSearchParams(qs);

let id_pelicula = qsObj.get('id');


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
    console.log(data);
   titulo.innerText = data.title
   imagenDetalle.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
   calificacion.innerText = "Calificación: " + data.vote_average
    fecha.innerText = "Fecha de estreno: " + data.release_date
    duracion.innerText = "Duración en minutos: " + data.runtime
    sinopsis.innerText = data.overview
    

    
})
.catch(function(err){
    console.log(err)
}
);



fetch(url)
.then(function(res){
    return res.json()
})
.then(function(data){
    let contenido = " "
    for (let i = 0; i < data.genres.length; i++) {
        contenido += `<a href="./generos-especificos.html">${data.genres[i].name}</a> `
        
    }
    genero.innerHTML = "Género/s: " + contenido

})
.catch(function(err){
    console.log(err)
}
);

let ulrRecomendaciones = `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${acaVaLaAPIKey}`
let recomendacion = document.querySelector("#recomendacion")
let boton = document.querySelector("#botonrecom")



fetch(ulrRecomendaciones)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let miData = data.results
    console.log(miData);
    let recomenda = '';
    for (let i = 0; i < 3; i++) {
        recomenda += `<article class="article-pelis">
                        <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis">
                        <h3>${miData[i].title}</h3>
                        <p>${miData[i].release_date}</p>                 
                        <a href="./pelis.html?id=${miData[i].id}" class="asas">Ver más</a>
                    </article>`; 
    }
    recomendacion.innerHTML=recomenda
})
.catch(function(error) {
    console.log(error);
});

boton.addEventListener("click", function(){
    recomendacion.style.display = "flex";
})


