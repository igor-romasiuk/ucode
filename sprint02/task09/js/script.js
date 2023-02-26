'use strict';



const user = {
	name: 'Steve',
	surname: 'Rogers',
	age : 101,
	city: 'New York'
};

function copyObj(user) {
	let copy = JSON.parse(JSON.stringify(user));
	return copy;
}
const cpy = copyObj(user);

console.log(user);
console.log(cpy);
user.name = 'John';
console.log(user);
console.log(cpy);
