const palindromes = function (str) {
  let onlyLetters = '';

  str.split('')
    .forEach(char => {
      if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
        onlyLetters += char.toLowerCase();
      }
    });
  
  const reversed = onlyLetters.split('').reverse().join('');
  
  return onlyLetters === reversed;
};

// Do not edit below this line
module.exports = palindromes;
