'use strict'

/**
 * Utilizando un bucle , mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
 */

var num, cont = 0, suma = 0, media;

num = parseInt(prompt("Digite numero hasta que digites uno negativo: ", 0));

if(isNaN(num)){
    num = 0;
}

while (num >= 0) {
    suma += num;
    cont++;
    num = parseInt(prompt("Digite numero: ", 0));
}

media = suma / cont;

console.log("La suma de los numeros introducidos es: " + suma);
console.log("La media de los numeros introducidos es: " + media);