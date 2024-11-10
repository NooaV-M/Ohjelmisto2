'use strict';

if (confirm("Should I calculate the square root?")) {
    const year = prompt("Enter a number: ");
    if (year > 0) {
        document.querySelector('#statement').innerHTML = Math.sqrt(year);
    }
    else {
        document.querySelector('#statement').innerHTML = "Enter a positive number";
    }
} else {
    document.querySelector('#statement').innerHTML = "The square root is not calculated.";
}


