'use strict';

const stuff = [121,212,121,12,21]

function getevens(arr) {
    let evens = []
    for (let num in arr) {
        if (arr[num] % 2 == 0) {
            evens.push(`${arr[num]}`)
        }
    }
    return evens
}

console.log(stuff);

console.log(getevens(stuff));
