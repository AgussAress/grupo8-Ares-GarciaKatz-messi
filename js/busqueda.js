let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
console.log(qsObj);
let id_busqueda = qsObj.get("buscador");
console.log(id_busqueda)


let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${id_busqueda}`;

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let miData = data.results
    console.log(miData);
    let secBus = document.querySelector("#secbus")
    let contenido = " ";
    for (let i = 0; i < miData.length; i++) {
        contenido += `<article class="article-pelis">
                    <img src="./img/star wars 8.webp${miData[i].poster_path}" alt="" class="imgPelis">
                        <h3>${miData[i].title}</h3>
                        <p>${miData[i].overview}</p>
                        <a href="./pelis.html" class="asas">Ver más</a>
                    </article>`;
        
    }
    secBus.innerHTML = contenido
})
.catch(function(err){
    console.log(err);
});