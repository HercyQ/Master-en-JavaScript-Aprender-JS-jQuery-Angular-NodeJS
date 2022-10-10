'use strict'

/**
 * Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
 * Si los datos no son numeros o son menores o iguales a 0, nos lo vuelva a pedir
 */


do {
    var num1 = parseInt(prompt("Digite primer numero: "));
    var num2 = parseInt(prompt("Digite segundo numero: "));
} while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

if (num1 > num2) {
    console.log("El numero mayor es " + num1);
    console.log("El numero menor es " + num2);
} else if (num1 < num2) {
    console.log("El numero mayor es " + num2);
    console.log("El numero menor es " + num1);
} else {
    alert("Los numeros son iguales");
}