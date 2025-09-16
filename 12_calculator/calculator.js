const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((prev, num) => prev + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev, num) => prev * num);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *= i;
  };
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
