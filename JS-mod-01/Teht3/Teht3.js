'use strict';

const num1 = parseInt(prompt('Enter a whole number'));
const num2 = parseInt(prompt('Enter a whole number'));
const num3 = parseInt(prompt('Enter a whole number'));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {

    document.querySelector('#sum').innerHTML = 'sum: ' + (num1 + num2 + num3);

    document.querySelector('#product').innerHTML = "product: " + num1 * num2 * num3;

    document.querySelector('#average').innerHTML = "average: " + (num1 + num2 + num3) / 3;
}
else {
    console.log('Invalid input')
}