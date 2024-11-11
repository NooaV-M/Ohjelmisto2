'use strict';

const start_year = parseInt(prompt("Enter starting year: "));
const end_year = parseInt(prompt("Enter last year: "));

let yearlist = ""

for (let i = 0; (i-1) < end_year - start_year; i++) {
    yearlist += `<li> ${start_year + i} </li>`
    console.log(yearlist)
    console.log(i)
}

document.querySelector('#skibidi').innerHTML = `<ul>${yearlist}</ul>`;