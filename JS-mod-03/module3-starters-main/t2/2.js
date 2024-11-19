'use strict';

const list1 = document.createElement("li")

const text1 = document.createTextNode("First Item")

list1.appendChild(text1)

document.getElementById("target").appendChild(list1)

const list2 = document.createElement("li")

const text2 = document.createTextNode("Second Item")

list2.className = "my-list"

list2.appendChild(text2)

document.getElementById("target").appendChild(list2)

const list3 = document.createElement("li")

const text3 = document.createTextNode("Third Item")

list3.appendChild(text3)

document.getElementById("target").appendChild(list3)
