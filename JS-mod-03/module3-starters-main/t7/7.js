'use strict';

const button = document.querySelector('#trigger');
const img = document.querySelector('#target')

button.addEventListener('mouseover', e => {
    img.src = "img/picB.jpg";
})

button.addEventListener('mouseout', e => {
    img.src = "img/picA.jpg";
})