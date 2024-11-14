'use strict';

const num_list = []

while (num_list[num_list.length - 1] != 0) {
    num_list.push(parseInt(prompt("Enter a number, or enter 0 to terminate.")));
}

num_list.sort((a, b) => b - a);

for (let i = 0; i < num_list.length; i++) {
    console.log(num_list[i]);
}