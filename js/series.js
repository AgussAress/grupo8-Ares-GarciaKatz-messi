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

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(data){
    let contenido = " "
    for (let i = 0; i < data.genres.length; i++) {
        contenido += `<a href="./generos-especificos.html">${data.genres[i].name}</a> `
        
    }
    genero.innerHTML = contenido

})
.catch(function(err){
    console.log(err)
}
);


let ulrRecomendaciones = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`
let recomendacion = document.querySelector("#recomendacion")

recomendacion.addEventListener('mouseover', function(e) { 
    recomendacion.style.backgroundColor = 'gold';
});
recomendacion.addEventListener('mouseout', function(e) { 
    recomendacion.style.backgroundColor = 'lightgrey';
});

fetch(ulrRecomendaciones)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let miData = data.results
    console.log(miData);
    let recomenda = '';
    for (let i = 0; i < 3; i++) {
        recomenda += `<section class="article-pelis">
                            <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis">
                            <h3>${miData[i].name}</h3>
                            <a href="./series.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </section>`;
    }
    recomendacion.innerHTML=recomenda
})
.catch(function(error) {
    console.log(error);
});
