"use strict"


const userName = prompt('What is your name?', 'Igor')
const lastName = prompt('What is your last name?', 'Romasiuk')
let fullName = `${userName} ${lastName}`

function info (fullName) {

let reg = /^[A-Za-z ,]+$/.test(fullName)

if (reg == true) {
const arr = fullName.split(" ");
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");
console.log('Welcome ' + str2);
alert('Welcome ' + str2)
} else {
  alert('Error')
  console.log('Error');
}
}
info(fullName)



//split the above string into an array of strings 
//whenever a blank space is encountered
//loop through each element of the array and capitalize the first letter.
//Join all the elements of the array back into a string 
//using a blankspace as a separator