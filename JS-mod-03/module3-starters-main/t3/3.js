'use strict';
const names = ['John', 'Paul', 'Jones'];

const ulElem = document.querySelector('ul');

for (let name of names) {
    let liElem = document.createElement('li');
    liElem.appendChild(document.createTextNode(name));
    ulElem.appendChild(liElem);
}