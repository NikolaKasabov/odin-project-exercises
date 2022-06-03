const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, cur) => {
    acc *= cur;
    return acc;
  }, 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let result = 1;
  if (num === 0) {
    return result;
  }

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

factorial(2)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
