'use strict'

//Transformacion de textos
var number = 444;
var text1 = "Bienvenido al curso de JavaScript de Victor Robles";
var text2 = "es muy buen curso, en verdad muy bueno";

var fact = number.toString();
fact = text1.toLowerCase();
fact = text2.toUpperCase();

console.log(fact);

//Calcular longitud
var nombre = "Victor Robles";
const array = [1, 2, 3];

console.log(nombre.length);
console.log(array.length);

//Concatenar - unir textos

//var textoTotal = texto1 + " " + texto2;
var fullText = text1.concat(" " + text2);

console.log(fullText);

//Busqueda por posicion

var search = text1.indexOf("curso"); //busca la primera palabra de todas las iguales
search = text2.lastIndexOf("muy");//busca la ultima palabra de todas las iguales
search = text1.match("curso");// devuelve un array con toda la info de la busqueda
search = text2.match(/muy/g); //devuelve cantidad de coincidencias en global
search = text1.substring(5, 14); //extrae desde pos 5 hasta la pos 14.
search = text1.charAt(44); //Devuelve la letra ubicada en la pos indicada
search = text1.startsWith("Victor"); // Devuelve true si el texto esta al inicio de la cadena
search = text1.endsWith("Victor"); // Devuelve true si el texto esta al final de la cadena si no false
search = text1.replace("JavaScript", "Symfony"); //Reemplaza el texto original por otro 
search = text1.slice(14, 22); //Corta parte de la cadena de texto y lo devuelve a partir del pos seleccionado
search = text1.split(" "); //Convierte la cadena a un array de palabras separadas por un espacio
search = text1.trim(); //Elimina los espacios que pueda haber al inicio o final de la cadena
console.log(search);