let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let url = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`; /*Creamos el de pelis populares */
let url2 = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;  /*Creamos el de series populares */
let seccionPelis = document.querySelector("#seccionPelis");
let seccionSeries = document.querySelector("#seccionSeries");


fetch(url)
.then(function(res){
    return res.json()
})
.then(function(data){
    let miData = data.results
    let contenido = ""
    for (let i = 0; i<5; i++) {
        console.log(miData[i]);
        contenido += `<article class="article-pelis">
                            <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis">
                            <h3>${miData[i].title}</h3>
                            <p>${miData[i].release_date}</p>
                            <a href="./pelis.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </article>`;        
                      
    }
    seccionPelis.innerHTML = contenido;
})
.catch(function(err){
    console.log(err)
}
);

fetch(url2)
.then(function(res){
    return res.json()
})
.then(function(data){
    let miData = data.results
    let contenido = ""
    for (let i = 0; i<5; i++) {
        console.log(miData[i]);
        contenido += `<article class="article-pelis">
                            <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis">
                            <h3>${miData[i].name}</h3>
                            <p>${miData[i].first_air_date}</p>
                            <a href="./series.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </article>`;        
                      
    }
    seccionSeries.innerHTML = contenido;
})
.catch(function(err){
    console.log(err)
}
);

fetch(url2)
.then(function(res){
    return res.json()
})
.then(function(data){
    let miData = data.results
    let contenido = ""
    for (let i = 0; i<5; i++) {
        console.log(miData[i]);
        contenido += `<article class="article-pelis">
                            <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="" class="imgPelis">
                            <h3>${miData[i].name}</h3>
                            <p>${miData[i].first_air_date}</p>
                            <a href="./series.html?id=${miData[i].id}" class="asas">Ver más</a>
                        </article>`;        
                      
    }
    seccionSeries.innerHTML = contenido;
})
.catch(function(err){
    console.log(err)
}
);