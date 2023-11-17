let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let recuperoStorage = localStorage.getItem('favoritos');

/* transformar el json (string) en obj o un array */
let favoritos = JSON.parse(recuperoStorage)

let section = document.querySelector('#favoritos');


let pelisFavoritas = '';



if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p id="favs" ><i>No hay favoritos seleccionados</i></p>'
} else {

    for (let i = 0; i < favoritos.length; i++) {

        let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${acaVaLaAPIKey}`;

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            pelisFavoritas += `<article class="article-pelis" id="articleFavs">
                                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" class="imgPelis">
                                    <h3>${data.title}</h3>
                                    <a href="./pelis.html?id=${data.id}" class="asas">Ver más</a>
                                </article>`;
            section.innerHTML = pelisFavoritas;

        })
        .catch(function(error) {
            console.log(error);
        });

    }
}