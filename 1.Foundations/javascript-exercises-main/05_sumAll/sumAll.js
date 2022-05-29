const sumAll = function (startNum, endNum) {
  if (typeof startNum !== 'number'
    || typeof endNum !== 'number'
    || startNum < 0
    || endNum < 0) {
    return 'ERROR';
  }

  let sum = 0;

  for (let i = Math.min(startNum, endNum); i <= Math.max(startNum, endNum); i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
