'use strict';

const candNum = parseInt(prompt("Enter number of candidates."))

const candList =[]

for (let i = 0; i < candNum; i++) {
    candList.push({
        name: prompt(`Enter name for candidate ${i + 1}`),
        votes: 0
        })
}

const voterNum = parseInt(prompt("Enter number of voters."))

for(let i = 0; i < voterNum; i++) {
    let currentCand = parseInt(prompt("Enter candidate number to vote for"))
    if (typeof candList[currentCand - 1] != "undefined") {
        candList[currentCand - 1].votes++
    }
}

console.log(candList)

candList.sort((a, b) => b.votes - a.votes)

console.log(`The winner is ${candList[0].name} with ${candList[0].votes} votes.`)
console.log(`Results:`)
for (let i = 0; i < candList.length; i++) {
    console.log(`${candList[i].name}: ${candList[i].votes} votes)`)
}