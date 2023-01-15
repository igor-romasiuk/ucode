"use strict"

let beginRange = +prompt('Please, enter a beginning number', '1') || 1
let endRange = +prompt('Please, enter an ending number', '100') || 100

function checkDivision(start = 1, end = 100) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
            console.log(`${i} is even, a multiple of 3, a multiple of 10`)
        } else if (i % 2 === 0 && i % 3 === 0) {
            console.log(`${i} is even, a multiple of 3`)
        } else if (i % 2 === 0 && i % 10 === 0) {
            console.log(`${i} is even, a multiple of 10`)
        } else if (i % 3 === 0) {
            console.log(`${i} is a multiple of 3`)
        } else if (i % 2 === 0) {
            console.log(`${i} is even`)
        } else {
            console.log(`${i} -`)
        }
    }
}

checkDivision(beginRange, endRange)
