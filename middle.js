const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1, array2);
  if (result) {
    console.log(`Assertion Passed: ✅✅✅ ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: 🛑🛑🛑 ${array1} !== ${array2}`);
  }
};

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    if (arr.length % 2 === 0) {
      let arrIndex1 = arr.length / 2 - 1 ;
      let arrIndex2 = arr.length / 2;
      result = [arr[arrIndex1], arr[arrIndex2]]; 
      return result;
    } else {
      let arrIndex = (arr.length - 1) / 2;
      result = [arr[arrIndex]]
      return result;
    }
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]),[]);


