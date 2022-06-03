const findTheOldest = function (arr) {
  return arr.reduce((acc, cur) => {
    const currentAge = getAge(cur.yearOfBirth, cur.yearOfDeath);
    cur.age = currentAge;

    if (currentAge > acc.age) {
      acc = cur;
    }

    return acc;
  }, { age: 0 });
};


function getAge(yearOfBirth, yearOfDeath) {
  if (yearOfDeath) {
    return yearOfDeath - yearOfBirth;
  }

  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;


findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]);
