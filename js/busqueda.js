let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
console.log(qsObj);
let id_busqueda = qsObj.get("buscador");
console.log(id_busqueda);
let peliculasTitulo = document.querySelector(".peliculas-titulo");

let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${id_busqueda}`;

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let miData = data.results
    peliculasTitulo.innerText = `Resultados para "${id_busqueda}"`
    if (miData.length > 0) {
        console.log(miData);
        let secBus = document.querySelector("#galeria")
        let contenido = " ";
        for (let i = 0; i < miData.length; i++) {
            contenido += `<li class="li-pelis">
                        <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis" id="pelisBuscador">
                            <h3 id="tituloh3">${miData[i].title}</h3>
                            <a href="./pelis.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </li>`;
            
        }
        secBus.innerHTML = contenido
    }
    else{ 
        let noMostro = document.querySelector(".noMostrar")
        noMostro.classList.remove("noMostrar")
        noMostro.classList.add("mostrar")
    }

})
.catch(function(err){
    console.log(err);
});