'use strict';



function concat(str1, str2) {

	function innerConcat(str2) {
		innerConcat.count++;
		if (!str2) str2 = prompt('Enter the second string:','Hulk alone!');
		return str1 + ' ' + str2;
	}
	innerConcat.count = 0;
	if (!str2) { 
		return innerConcat;
	}else {
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
output = phrase2();
console.log(output);
console.log(phrase2.count);
let phrase3 = concat('Go');
output = phrase3();
console.log(output);
console.log(phrase3.count);
console.log(phrase2.count);
