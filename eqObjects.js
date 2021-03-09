const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let item in object1) {
    

    //if one is Array and one is not
    if (Array.isArray(object1[item]) !== Array.isArray(object2[item])) {
      // console.log("different data types, line 31")
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
    // else {
    //   console.log(object2[item], " ", object1[item]);
    // }
  }
  return true;
};

module.exports = eqObjects;