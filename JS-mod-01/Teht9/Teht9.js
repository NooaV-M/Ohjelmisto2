'use strict';

const num = prompt('Enter whole number:');

let vastaus = `${num} on alkuluku`

if (num < 2) {
    vastaus = `${num} ei ole alkuluku`
}
else {
    for (let i = 2; i < num/2; i++) {
        if (num % i === 0) {
            vastaus = `${num} ei ole alkuluku`
            break;
        }
    }
}

document.querySelector("#result").innerHTML = vastaus;