'use strict'

/**
 * Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
 */

var inicio = parseInt(prompt("Digite numero inicial: ", 0));
var final = parseInt(prompt("Digite numero final: ", 0));

console.log("De " + inicio + " a " + final + " estan estos numeros:");

do {
    console.log(inicio);
    inicio++;
} while (inicio <= final)