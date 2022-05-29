const repeatString = function(str, repeatTimes) {
  if(repeatTimes < 0) return 'ERROR';

  return str.repeat(repeatTimes);
};

// Do not edit below this line
module.exports = repeatString;
