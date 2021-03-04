const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1);
assertArraysEqual([ "a", "b", "c", "d" ], map([ "aaaa", "bb", "cc", "dd" ], word => word[0]));
assertArraysEqual([ "1", "b", 1 ], map([ "111", "bb", [1,2,3]], word => word[0]));