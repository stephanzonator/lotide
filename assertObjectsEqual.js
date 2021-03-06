// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
//   }
// };
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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item in object1) {
    //if one is Array and one is not
    if (Array.isArray(object1[item]) !== Array.isArray(object2[item])) {
      return false;
    }

    //if both are Arrays
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      let result;
      result = eqArrays(object1[item], object2[item]);
      return result;
    }
    //if neither are arrays
    if (object2[item] !== object1[item]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let result = eqObjects(object1, object2);
  if (result) {
    console.log(`Assertion Passed: ✅✅✅ ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`Assertion Failed: 🛑🛑🛑 ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

//primitive tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
//array tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const ef = { e: 1, f: [1]};
const fe = { e: 1, f: 1};

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(ef, fe);