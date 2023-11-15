let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let urlPelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;
let urlSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;

let generosPelis = document.querySelector("#generosPelis");
let generosSeries = document.querySelector("#generosSeries");

fetch(urlPelis)
.then(function(res){
    return res.json()
})
.then(function(data){
    let miData = data.genres
    let contenido = ""
    for (i=0 ; i < miData.length; i++){
        console.log(miData[i]);
        contenido += `<article class="article-generos-peliculas">
                        <a href="./generos-especificos.html" class="asas" id="generosPelis">${miData[i].name}</a>
                    </article>`
        
    }
    generosPelis.innerHTML = contenido;
})
.catch(function(err){
    console.log(err)
});

/* Ahora hacemos el fetch para series */
fetch(urlSeries)
.then(function(res){
    return res.json()
})
.then(function(data){
    let miData = data.genres
    let contenido = ""
    for (i=0 ; i < miData.length; i++){
        console.log(miData[i]);
        contenido += `<article class="article-generos-peliculas">
                        <a href="./generos-especificos.html" class="asas">${miData[i].name}</a>
                    </article>`
        
    }
    generosSeries.innerHTML = contenido;
})
.catch(function(err){
    console.log(err)
});
