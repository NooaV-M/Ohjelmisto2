'use strict';
let form = document.querySelector('form');
form.addEventListener('submit',  async function(e) {
    e.preventDefault();
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${e.value}`)
    let responseData = await response.json();
    console.log(responseData)
});