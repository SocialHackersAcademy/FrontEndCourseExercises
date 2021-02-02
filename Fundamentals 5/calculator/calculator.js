// Repl to test code https://repl.it/@pchan01/calculator#index.js

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	let sum = 0;
  
	if(arr.length === 0) {
	  return sum;
	}
  
	  sum = arr.reduce((item, nextItem) => item + nextItem);
	  return sum;
  }

function multiply (arr) {
	let product = arr.reduce((item, nextItem) => item * nextItem);
	return product;
}

function power(a, powerOf) {
	return Math.pow(a, powerOf);
	// return a ** powerOf; >> ES6 syntax
}

/* the product of an integer and all the integers below it. e.g. factorial four ( 4! ) = 4 x 3 x 2 x 1 = 24 */
function factorial(a) {
	let numArr = [];
  
	for(let i = 0; i < a; i++) {
		num = i + 1;
		numArr.push(num);
	}
	
	let product = numArr.reduce((item, nextItem) => item * nextItem);
	
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}