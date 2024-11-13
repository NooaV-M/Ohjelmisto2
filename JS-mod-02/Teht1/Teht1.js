'use strict';

const numlist = []

for (let i = 0; i < 5; i++) {
    numlist.push(prompt("Enter a number"));
}

let newnums = []

for (let i = 0; i < 5; i++) {
    newnums.push(numlist.pop())
}

for (let newnum in newnums) {
    console.log(newnums[newnum]);
}
