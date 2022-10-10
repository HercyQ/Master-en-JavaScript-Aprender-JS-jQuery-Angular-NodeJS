'use strict'

//Arrays, arreglos, matrices

var nombres = ['Hercy', 'Diana', 'Fernanda', 'Jorge', 'Luisa'];
var lenguajes = new Array('php', 'javascript', 'java', 'c++', 'pascal');

console.log(lenguajes);
console.log(nombres);

var element = parseInt(prompt("Que elemento del array buscas", 0));

if (element >= nombres.length) {
    alert("Introduce el numero correcto menor que: " + nombres.length);
} else {
    alert("El usuario seleccionado es: " + nombres[element]);
}

//******************************************** 
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

lenguajes.forEach(element => {
    document.write("<li>" + element + "</li>");
});

document.write("</ul>");

//Busqueda
var precios = [10, 20, 50, 80, 12];
/*
var search= lenguajes.find(function(lenguaje){
    return lenguaje == "PHP7";
});
*/
var search = lenguajes.find(lenguaje => lenguaje == "php"); //findIndex, devuelve la posicion en el que esta el dato
var busqueda = precios.some(precio => precio < 10); //some, busca con condicion devuelve true o false 

console.log(search);