'use strict'
/**
 * Tabla de multiplicar de un numero introducido por pantalla
 */

var number = prompt("¿De que numero quieres la table? ", 0);

document.write("<h1>Tabla del " + number + "</h1>");

for (let i = 0; i <= 12; i++) {
    document.write(number + " X " + i + " = " + (number * i) + "<br/>");
}

/**
 * Todas las tablas de multiplicar
 */
for (let i = 0; i <= 12; i++) {
    document.write("<h1>Tabla del " + i + "</h1>");
    for (let j = 0; j <= 12; j++) {
        document.write(i+ " X " + j + " = " + (i * j) + "<br/>");
    }
}
