const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    if (arr.length % 2 === 0) {
      let arrIndex1 = arr.length / 2 - 1;
      let arrIndex2 = arr.length / 2;
      let result = [arr[arrIndex1],arr[arrIndex2]];
      return result;
    } else {
      let arrIndex = (arr.length - 1) / 2;
      let result = [arr[arrIndex]];
      return result;
    }
  }
};

module.exports = middle;


