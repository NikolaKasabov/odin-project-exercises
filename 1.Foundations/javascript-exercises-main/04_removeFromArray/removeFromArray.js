const removeFromArray = function(...args) {
  const arr = args[0];
  const itemsToRemove = args.slice(1);

  itemsToRemove.forEach(el => {
    const index = arr.findIndex(e => e === el);
    
    if(index > -1) {
      arr.splice(index, 1);
    }
  });

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
