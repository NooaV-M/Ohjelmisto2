'use strict';

const resultElem = document.querySelector("#result");

function mathFunc () {

    let var1 = parseInt(document.querySelector("#num1").value);
    let var2 = parseInt(document.querySelector("#num2").value);

    let mathFuncList = {
    "add": function (var1, var2) {
        console.log(var1, var2);
        resultElem.textContent = (var1 + var2).toString();
    },
    "sub": function (var1, var2) {
        resultElem.textContent = (var1 - var2).toString();
    },
    "multi": function (var1, var2) {
        resultElem.textContent = (var1 * var2).toString();
    },
    "div": function (var1, var2) {
        resultElem.textContent = (var1 / var2).toString();
    }
    }

    console.log(var1)

    if (typeof var1 === "number" && typeof var2 === "number") {
        let currentVal = (document.querySelector("#operation").value)
        mathFuncList[currentVal] (var1, var2);
    }
}

document.querySelector("#start").onclick = mathFunc;