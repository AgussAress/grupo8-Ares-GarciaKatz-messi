let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_detallesGeneros = qsObj.get('id');
let url = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${id_detallesGeneros}`;
let urlSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${id_detallesGeneros}`
fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let miData = data.results
    if (miData.length > 0) {
        console.log(miData);
        let secGen = document.querySelector("#galeria")
        let contenido = " ";
        for (let i = 0; i < miData.length; i++) {
            contenido += `<li>
                        <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis" id="imgGenerosEspecificos">
                            <h3 id="tituloh3">${miData[i].title}</h3>
                            <a href="./pelis.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </li>`;
            
        }
        secGen.innerHTML = contenido
    }

})
.catch(function(err){
    console.log(err);
});


fetch(urlSeries)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let miData = data.results
    if (miData.length > 0) {
        console.log(miData);
        let secGen = document.querySelector("#galeria")
        let contenido = " ";
        for (let i = 0; i < miData.length; i++) {
            contenido += `<li>
                        <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis" id="imgGenerosEspecificos">
                            <h3 id="tituloh3">${miData[i].name}</h3>
                            <a href="./series.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </li>`;
            
        }
        secGen.innerHTML = contenido
    }

})
.catch(function(err){
    console.log(err);
});

