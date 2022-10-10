'use strict'

//Parametros REST Y SPREAD

function fruitList(fruit1, fruit2, ...allFruits) {
    console.log("Fruit 1: ", fruit1);
    console.log("Fruit 2: ", fruit2);
    console.log(allFruits);
}

var fruits = ["Naranja", "Manzana"];

fruitList(fruits, "Sandia", "Pera", "Melon", "Coco");