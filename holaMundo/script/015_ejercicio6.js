'use strict'

/**
 * Que nos diga si un numero es par o impar
 * 1. Ventana prompt
 * 2. Si no es un numero que nos pida de nuevo el numero
 */
do {
    var number = prompt('Digita un numero: ', 0);
} while (isNaN(number)) ;

number % 2 === 0 ? alert("Es numero par") : alert("Es numero impar");