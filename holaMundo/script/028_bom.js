'use strict'

//BOM - Browser Object Model

//Ver el tamaño de la pantalla
function getBom() {
    console.log(screen.width);
    console.log(screen.height);
}

function redirect(url) {
    window.location.href = url;
}

getBom();