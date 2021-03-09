const findKeyByValue = function(listObject, show) {
  for (let row in listObject) {
    if (listObject[row] === show) {
      return row;
    } else {
      // console.log("else log:", listObject[row], " does not equal ", show);
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
