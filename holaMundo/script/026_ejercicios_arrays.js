'use strict'

/**
 * 1. Pida 6 numeros por pantalla y los ingrese en un array
 * 2. Mostrar el array entero(todos sus elementos) en el cuertpo de la pagina y en consola.
 * 3. Ordenarlo y mostrarlo
 * 4. Invertir el orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 */
function showArray(array, textCustom = "") {
    document.write("<h1>Contenido del array " + textCustom + "</h1>");
    document.write("<ul>");
    array.forEach(element => {
        document.write("<li>" + element + "</li>");
    });
    document.write("</ul>");
}

var numbers = [];

//1)
for (let i = 0; i < 6; i++) {
    numbers.push(parseInt(prompt("Digite un numero: ", 0)));
}

//2)
console.log("*******MOSTRAR ELEMENTOS EN EL ARRAY***********");
console.log(numbers);// por consola

//Body
showArray(numbers);

//3)
console.log("*******ARRAY ORDENADO***********");
numbers.sort((a, b) => { return a - b });

showArray(numbers, "Ordenado");
console.log(numbers);

//4)
console.log("********ARRAY INVERTIDO**********");
numbers.reverse();
numbers.forEach(pos => {
    console.log(pos);
});

//5)
document.write("<h1>El array tiene: " + numbers.length + " elementos </h1>");

//6)
var search = parseInt(prompt("Busca un numero: ", 0));
var position = numbers.findIndex(number => number === search);

if (position && position != -1) {
    document.write("<h1>ENCONTRADO</h1>")
    document.write("<h1>Posicion de la busqueda: " + position + "</h1>");
} else {
    document.write("<h1>NO ENCONTRADO</h1");
}