'use strict'

var categories = ['accion', 'terror', 'comedia'];
var movies = ['titanic', 'gladiador', 'prometeo'];

var cine = [categories, movies];

console.log(cine[0][1]);
console.log(cine[1][2]);

var newMovie = prompt("Agregar pelicula: ");

while (newMovie != "ACABAR") {
    movies.push(newMovie);
    var newMovie = prompt("Agregar pelicula: ");
}

console.log(movies);

//Eliminar el elemento seleccionado

var deleteMovie = prompt("Titulo de pelicula a eliminar: ");

var indice = movies.indexOf(deleteMovie);

if (indice > -1) {
    movies.splice(indice, 1);
}

console.log(movies);

//Extraer elementos de array y converetirlos a cadenas separadas por comas

var listMovies = movies.join();

console.log(listMovies);

//Convertir un string  a un array
var cadena = "text1, text2, text3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

//Ordenar array

movies.sort();
console.log(movies);