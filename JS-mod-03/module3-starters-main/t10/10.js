'use strict';

let forms = document.querySelector("form");

let fname = document.querySelector("input[name=firstname]");
let lname = document.querySelector("input[name=lastname]");

const p = document.querySelector("p")

forms.addEventListener("submit", function(e) {
    e.preventDefault();

    p.innerText = `Your name is ${fname.value} ${lname.value}`;
})