'use strict'

//Plantillas de texto

var nombre = prompt("Ingresa un nombre: ");
var lastname = prompt("Ingresa tus apellidos: ");

var text = `
        <h1>Hola que tal</h1>
        <h3>Mi nombre es: ${nombre}</h3>
        <h3>Mis apellidos son: ${lastname}</h3>
        `;

document.write(text);