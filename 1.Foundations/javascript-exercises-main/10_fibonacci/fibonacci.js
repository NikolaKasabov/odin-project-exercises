const fibonacci = function (n) {
  const num = parseInt(n);
  const arr = [1, 1];

  if (!num || num < 0) {
    return 'OOPS';
  } else if (num === 1 || num === 2) {
    return 1;
  }

  for (let i = 2; i < num; i++) {
    const currentNum = arr[i - 2] + arr[i - 1];
    arr.push(currentNum);
  }

  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
