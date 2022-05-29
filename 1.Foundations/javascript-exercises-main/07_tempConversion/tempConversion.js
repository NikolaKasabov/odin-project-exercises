const ftoc = function(tempF) {
  let temp = (tempF - 32) * (5 / 9);
  temp = Math.round(temp * 10) / 10;
  return temp;
};

const ctof = function(tempC) {
  let temp = (tempC * (9 / 5)) + 32;
  temp = Math.round(temp * 10) / 10;
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
