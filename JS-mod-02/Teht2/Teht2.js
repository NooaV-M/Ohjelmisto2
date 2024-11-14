'use strict';

let participant_list = []

let participant_string = ""

let participant_num = parseInt(prompt("Enter number of participants"))

for(let i = 0; i < participant_num; i++){
    participant_list.push(prompt("Enter participant name"));
}

participant_list.sort()

for(let i = 0; i < participant_num; i++){
    participant_string += `<li>${participant_list[i]}</li><br>`;
}

document.querySelector("#skibidi").innerHTML = participant_string;

console.log(participant_list);