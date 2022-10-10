'use strict'

var number = 12;
var text = "Hola mundo soy una variale global";

function helloWord(text) {
    var hello_Word = "Texto dentro de funcion";
    console.log(text);
    console.log(number.toString());
    console.log(hello_Word);
}

helloWord(text);