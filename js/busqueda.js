let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let busqueda = document.querySelector('#buscador');
let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`;

console.log(document.addEventListener('submit', function(){
    console.log(url)
}));