'use strict'
/**
 * Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

var head = parseInt(prompt("Digite numero inicial: ", 0));
var end = parseInt(prompt("Digite numero final: ", 0));

console.log("Numeros impares entre " + head + " y  " + end + " :");

do {
    if (head % 2 !== 0) {
        console.log(head);
    }
    head++;
} while (head <= end)