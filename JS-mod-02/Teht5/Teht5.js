'use strict';

const num_list = []

while (true) {
    let newnum = (parseInt(prompt("Enter a number, or enter duplicate number to terminate.")));
    if (newnum in num_list) {
        alert("Duplicate number entered.")
        break;
    }
    else {
        num_list.push(newnum)
    }
}

num_list.sort((a, b) => a - b);

for (let i = 0; i < num_list.length; i++) {
    console.log(num_list[i]);
}