'use strict'

window.addEventListener('load', () => {

    //Timers
    var play = document.querySelector("#play");

    play.addEventListener('click', () => {
        var time = setInterval((size) => {
            console.log("Set interval ejecutado");
            var titulo = document.querySelector("h1");
            (titulo.style.fontSize === "50px" ? size = "20px" : size = "50px");
            titulo.style.fontSize = size;
        }, 1000);

        var stop = document.querySelector("#stop");

        stop.addEventListener("click", () => {
            clearInterval(time);//detiene la ejecucion del setInterval
            alert("Detuviste el intervalo del bucle");
        });
    });
});