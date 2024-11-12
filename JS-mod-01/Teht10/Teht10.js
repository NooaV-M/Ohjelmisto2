'use strict';

const dicenum = parseInt(prompt('Enter number of dice:'));

const resultnum = parseInt(prompt('Enter target dice total:'));

let corrects=0;

let incorrects=0;

let rolled6 = 0;

for (let i = 0; i < 10000; i++) {
    let current_result = 0
    for (let j = 0; j < dicenum; j++) {
        current_result += (Math.ceil(Math.random() * 6))
        if (current_result == 6) {
            rolled6++
        }
    }
    if (current_result === resultnum) {
        corrects++
    }
    else
        incorrects++
}

document.querySelector("#result").innerHTML = `Probability to get sum ${resultnum} with ${dicenum} dice is ${((corrects/incorrects).toFixed(2))}%`;