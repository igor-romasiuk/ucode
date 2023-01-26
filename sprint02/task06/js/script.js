"use strict"


const userName = prompt('What is your name?', 'Igor');
const lastName = prompt('What is your last name?', 'Romasiuk');
let fullName = `${userName} ${lastName}`;

function greeting (fullName) {
const reg = /^[A-Za-z ]+$/.test(fullName);

if (reg) {
  const arr = fullName.split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
  const str2 = arr.join(" ");

  console.log('Welcome ' + str2);
  alert('Welcome ' + str2);
} else {
  alert('Wrong input');
  console.log('Wrong input');
}
}
greeting(fullName);
