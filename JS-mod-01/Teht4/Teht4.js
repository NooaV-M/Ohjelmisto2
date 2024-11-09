'use strict';

const name = prompt('What is your name?');

function getHouse() {
    const num = Math.round(Math.random()*3);

    switch (num) {
        case 0:
            return  "Hufflepuff";
        case 1:
            return  "Gryffindor";
        case 2:
            return  "Ravenclaw";
        case 3:
            return  "Slytherin";
    }
}

document.querySelector('#Result').innerHTML = name + ", your house is " + getHouse();