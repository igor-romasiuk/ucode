'use strict';



function concat(str1, str2) {
	let count = 0;
	function innerConcat(str2) {
		count++;
		if (str2 === undefined) {
			str2 = prompt('Enter the second string:','Hulk alone!');
		}
		return str1 + ' ' + str2;
	}

	if (str2 === undefined) {
		return innerConcat;
	} else {
		return innerConcat(str2);
	}
}
  



let phrase1 = concat('Hulk', 'smash!');
let output = phrase1;
console.log(output);
let phrase2 = concat('Leave');
output = phrase2();
console.log(output);
console.log(phrase2.count);
output = phrase2();
console.log(output);


