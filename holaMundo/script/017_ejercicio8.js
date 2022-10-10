'use strict'

/**
 * Calculadora que pida dos numeros por pantalla
 * Si digitamos un dato que no es numero , que nos vuelva a pedir
 * En el cuerpo de la pagina, en una alerta y por consola el resultado de suma, restar, multiplicar , dividir, esas dos cifras
 */

do {
    var numberOne = parseInt(prompt("Digite primer numero: ", 0));
    var numberTwo = parseInt(prompt("Digite segundo numero: ", 0));
} while (isNaN(numberOne) && isNaN(numberOne));

document.write("<h2>" + numberOne + " + " + numberTwo + " = " + (numberOne + numberTwo) + "</h2>");
document.write("<h2>" + numberOne + " - " + numberTwo + " = " + (numberOne - numberTwo) + "</h2>");
document.write("<h2>" + numberOne + " * " + numberTwo + " = " + (numberOne * numberTwo) + "</h2>");
document.write("<h2>" + numberOne + " / " + numberTwo + " = " + (numberOne / numberTwo) + "</h2>");

alert(`${numberOne} + " + " + ${numberTwo} + " = " + (${numberOne} + ${numberTwo} ) + "/n" +
       ${numberOne} + " - " + ${numberTwo} + " = " + (${numberOne} - ${numberTwo} ) + "/n" +
       ${numberOne} + " * " + ${numberTwo} + " = " + (${numberOne} * ${numberTwo} ) + "/n" +
       ${numberOne} + " / " + ${numberTwo} + " = " + (${numberOne} / ${numberTwo})`);

console.log(numberOne + " + " + numberTwo + " = " + (numberOne + numberTwo));
console.log(numberOne + " - " + numberTwo + " = " + (numberOne - numberTwo));
console.log(numberOne + " * " + numberTwo + " = " + (numberOne * numberTwo));
console.log(numberOne + " / " + numberTwo + " = " + (numberOne / numberTwo));