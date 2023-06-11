'use strict';



function Calculator() {
	this.result = 0;
  
	this.init = function(num) {
		this.result = num;
		return this;
	};
  
	this.add = function(num) {
		this.result += num;
		return this;
	};
  
	this.sub = function(num) {
		this.result -= num;
		return this;
	};
  
	this.mul = function(num) {
		this.result *= num;
		return this;
	};
  
	this.div = function(num) {
		this.result /= num;
		return this;
	};
  
	this.alert = function() {
		setTimeout(() => alert(`Current result: ${this.result}`), 5000);
		return this;
	};
}
  
const calc = new Calculator();
console.log(
	calc
		.init(2)
		.add(2)
		.mul(3)
		.div(4)
		.sub(2).result // 1
);
calc.alert();
