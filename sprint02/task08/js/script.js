'use strict';



const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

function sortEvenOdd(arr) {
	const even = [];
	const odd = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}

	even.sort(function(a,b){return a-b;});
	odd.sort(function(a,b){return a-b;});

	return even.concat(odd);
}
const result = sortEvenOdd(arr);
console.log(result);
