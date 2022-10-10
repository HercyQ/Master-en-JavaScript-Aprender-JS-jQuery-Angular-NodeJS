'use strict'

window.addEventListener('load', () => {
    //Eventos del raton

    var boton = document.querySelector("#boton");

    function changeColor() {
        var color = boton.style.background;

        (color === 'green' ? color = "red" : color = "green");

        boton.style.background = color;
    }

    //click
    boton.addEventListener('click', () => {
        changeColor();
    });

    //Mouse over
    boton.addEventListener('mouseover', () => {
        boton.style.color = "blue";
    });

    //mouse out
    boton.addEventListener('mouseout', () => {
        boton.style.color = "black";
    });

    //Focus
    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus', () => {
        console.log("Estas dentro del input");
    });
    //Blur
    input.addEventListener('blur', () => {
        console.log("Estas fuera del input");
    });
    //Keydown
    input.addEventListener('keydown', (event) => {
        console.log("Pulsando esta tecla ", String.fromCharCode(event.keyCode)); //muestra que letra se esta digitando en el input
    });
    //Keypress
    input.addEventListener('keypress', (event) => {
        console.log("Tecla presionada ", String.fromCharCode(event.keyCode)); //
    });
    //Keyup
    input.addEventListener('keyup', (event) => {
        console.log("Tecla soltada", String.fromCharCode(event.keyCode)); //muestra que letra que se dejo de presionar
    });
});
