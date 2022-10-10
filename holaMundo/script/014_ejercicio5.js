'use strict'

/**
 * Muestre todos los numeros divisores de un numero introducido en prompt
 * 
 */

var number = parseInt(prompt("Digite un numero: ", 0));

for (var i = 1; i < numero; i++) {
    if (number % i === 0) {
        console.log("Divisor: " + i);
    }
}