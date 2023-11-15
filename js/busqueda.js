let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
console.log(qsObj);
let id_busqueda = qsObj.get('buscar');
console.log(id_busqueda)


let busqueda = document.querySelector('#buscador');
let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${id_busqueda}`;

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let miData = data.results
    console.log(miData);
    let contenido = " ";
})
.catch(function(err){
    console.log(err);
});