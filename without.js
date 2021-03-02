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
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(sourceArray, withoutArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let toAdd = true;
    for (let j = 0; j < withoutArray.length; j++) {
      if (sourceArray[i] === withoutArray[j]) {
        toAdd = false;
      }
    }
    if (toAdd === true) {
      result.push(sourceArray[i]);
    }
  }
  return result;
};

//test function
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
const modTest = [1,2,3,4];
console.log(without(modTest, [1,2,3]));
assertArraysEqual(modTest, [1,2,3,4]);
