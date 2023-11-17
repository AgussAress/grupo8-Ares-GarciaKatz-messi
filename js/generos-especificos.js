let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_detallesGeneros = qsObj.get('id');
///Preguntar with_genres///
let url = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${id_detallesGeneros}`;


fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let miData = data.results
    ///peliculasTitulo.innerText = `Resultados para "${id_busqueda}"`///
    if (miData.length > 0) {
        console.log(miData);
        let secGen = document.querySelector("#secGen")
        let contenido = " ";
        for (let i = 0; i < miData.length; i++) {
            contenido += `<article class="article-pelis">
                        <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis" id="imgGenerosEspecificos">
                            <h3 id="tituloh3">${miData[i].title}</h3>
                            <a href="./pelis.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </article>`;
            
        }
        secGen.innerHTML = contenido
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

