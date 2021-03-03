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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL