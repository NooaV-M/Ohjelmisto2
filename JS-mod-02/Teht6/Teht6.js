'use strict';

function rolld6 () {
    return Math.ceil(Math.random() * 6);
}

let roll_list = [rolld6()]

while (roll_list[roll_list.length-1] !== 6)  {
        roll_list.push(rolld6())
}


let roll_script = ""

for (let i = 0; i < roll_list.length; i++) {
    roll_script += `<li>${roll_list[i]}</li>`
}

document.querySelector("ul").innerHTML = roll_script