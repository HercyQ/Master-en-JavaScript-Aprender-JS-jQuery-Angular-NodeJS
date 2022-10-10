'use strict'

function byConsole(number1, number2) {
    console.log("Suma: " + (number1 + number2));
    console.log("Resta: " + (number1 - number2));
    console.log("Multiplicacion: " + (number1 * number2));
    console.log("Division: " + (number1 / number2));
    console.log("**********************************");
}

function onScreen(number1, number2) {
    document.write("Suma: " + (number1 + number2) + "<br/>");
    document.write("Resta: " + (number1 - number2) + "<br/>");
    document.write("Multiplicacion: " + (number1 * number2) + "<br/>");
    document.write("Division: " + (number1 / number2) + "<br/>");
    document.write("**********************************");
}

function calculadora(number1, number2, toShow = false) {
    if (toShow === false) {
        byConsole(number1, number2);
    } else {
        onScreen(number1, number2);
    }

    return true;
}

calculadora(2, 5, true);
/*
for (let i = 0; i <= 12; i++) {
    console.log(i);
    calculadora(i, 2);
}*/