'use strict'

//Funciones anonimas
var movie = function (name) {
    return "The movie is: " + name;
}

//CALLBACK
function sumame(number1, number2, sumaYmuestra, sumaPorDos) {
    var sumar = number1 + number2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

//Funcion flecha
sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
}),
    dato => {
        console.log("La suma por dos es: ", (dato * 2));
    }