'use strict';

const stuff = ["aa", "bb", "cc", "dd"]



function concat(arr) {
    let stuffString = ""
    for (name in arr) {
        stuffString += `${arr[name]}`
    }
    return stuffString

}

console.log(concat(stuff));

document.querySelector("#skibidi").innerHTML = concat(stuff);