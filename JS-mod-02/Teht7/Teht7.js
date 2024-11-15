'use strict';

const diceSides = parseInt(prompt("Enter dice sides"))

function rolldice (sides) {
    return Math.ceil(Math.random() * diceSides);
}

let roll_list = [rolldice(diceSides)];

while (roll_list[roll_list.length-1] !== diceSides)  {
        roll_list.push(rolldice(diceSides))
}


let roll_script = ""

for (let i = 0; i < roll_list.length; i++) {
    roll_script += `<li>${roll_list[i]}</li>`
}

document.querySelector("ul").innerHTML = roll_script