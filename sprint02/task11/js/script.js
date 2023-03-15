'use strict';



const assert = require('chai');
const { describe, it } = require('mocha');

function checkBrackets(str) {
	if (typeof str !== String || !/[()]/.test(str)) {
		return -1;
	}

	let count = 0;
	let imbalance = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			count++;
		} else if (str[i] === ')') {
			count--;
		} else if (count < 0) {
			imbalance++;
			count = 0;
		}
	}
	imbalance += count;
	return imbalance;
}


describe('checkBrackets', function() {
	it('should return -1 if input is not a string', function() {
		const result = checkBrackets(123);
		assert.equal(result, -1);
	});
	it('should return -1 if input does not contain ( or ) brackets', function() {
		const result = checkBrackets('hello world');
		assert.equal(result, -1);
	});
	it('should return the minimum number of brackets to balance the string', function() {
		assert.equal(checkBrackets('()'), 0);
		assert.equal(checkBrackets('(())'), 0);
		assert.equal(checkBrackets('(()())'), 0);
		assert.equal(checkBrackets('())'), 1);
		assert.equal(checkBrackets(')()('), 1);
		assert.equal(checkBrackets('((())'), 1);
		assert.equal(checkBrackets(')))((('), 6);
		assert.equal(checkBrackets(')('), 2);
		assert.equal(checkBrackets('()()()()()'), 0);
		assert.equal(checkBrackets('(()(()))()()'), 0);
	});
	it('should return -1 for invalid input', function() {
		assert.equal(checkBrackets(), -1);
		assert.equal(checkBrackets(null), -1);
		assert.equal(checkBrackets({}), -1);
		assert.equal(checkBrackets([]), -1);
		assert.equal(checkBrackets('foo'), -1);
	});
});
