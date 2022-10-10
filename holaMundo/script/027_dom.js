'use strict'

function cambiaColor(color) {
    caja.style.background = color;
}

var caja = document.querySelector("#micaja");

caja.innerHTM = "!TEXTO EN LA CAJA DESDE JS!!";
//caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "cajita";

//Conseguir elementos por su etiqueta
var allDivs = document.getElementsByTagName('div');

//var content = allDivs[2].innerHTML; //content muestra lo que tiene el div
var content = allDivs[2].innerHTML = "Otro texto para el segundo elemento";

var seccion = document.querySelector("#miSeccion");

for (const value in allDivs) {
    if (typeof allDivs[value].textContent === 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(allDivs[value].textContent);

        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

//Conseguir elementos por su css
var color = prompt("Digite color: "); //Solicitamos el color de div al usuario
var divsRed = document.getElementsByClassName(color);

for (let i = 0; i < divsRed.length; i++) {
    divsRed[i].style.background = color;
}

//Query selector
var encabezado = document.querySelectorAll('#encabezado');
console.log(encabezado);