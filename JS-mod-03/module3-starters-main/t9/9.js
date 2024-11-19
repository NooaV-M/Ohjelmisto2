'use strict';

const resultElem = document.querySelector("#result");

const inputElem = document.querySelector("input")

let opList = ["+","-","*","/"]

function stuff () {
    console.log("calculating")
    let textValue = inputElem.value;
    console.log(textValue);
    for (let op of opList) {
        console.log(op)
        if (textValue.includes(op)) {
            let partList = textValue.split(op);
            console.log(partList);
            switch (op) {
                case "+":
                    resultElem.textContent = (parseInt(partList[0])+parseInt(partList[1])).toString();
                    break;
                case "-":
                    resultElem.textContent = (parseInt(partList[0])-parseInt(partList[1])).toString();
                break;
                case "*":
                    resultElem.textContent = (parseInt(partList[1])*parseInt(partList[0])).toString();
                break;
                case "/":
                    resultElem.textContent = (parseInt(partList[0])/parseInt(partList[1])).toString();
            }
        }

    }
}

document.querySelector("button").addEventListener("click", stuff);