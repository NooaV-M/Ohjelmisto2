'use strict';

let participant_list = ""

let participant_num = parseInt(prompt("Enter number of participants"))

for(let i = 0; i < participant_num; i++){
    participant_list += `<li>${prompt("Enter participant name")}</li><br>`;
}

document.querySelector("#skibidi").innerHTML = participant_list;

console.log(participant_list);