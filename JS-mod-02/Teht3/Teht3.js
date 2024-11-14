'use strict';

let dog_list = []

let dog_string = ""

for(let i = 0; i < 6; i++){
    dog_list.push(prompt("Enter dog name"));
}

dog_list.sort()
dog_list.reverse()

for(let i = 0; i < 6; i++){
    dog_string += `<li>${dog_list[i]}</li><br>`;
}

document.querySelector("#skibidi").innerHTML = dog_string;