'use strict';

const year = prompt('Enter year');

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(year));

var message = ""

if (isLeapYear(year)) {
    message = year + " is a leap  year ";
}
else {
    message = year + " is not a leap year ";
}

document.querySelector('#statement').innerHTML = message;

