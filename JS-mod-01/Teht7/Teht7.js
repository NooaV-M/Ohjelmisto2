'use strict';

const dicenum = prompt("Enter number of dice to roll: ");

var diceresult = 0

for (let i = 0; i < dicenum; i++) {
    diceresult += Math.round(Math.random() * 6);
}

document.querySelector('#statement').innerHTML = diceresult;



