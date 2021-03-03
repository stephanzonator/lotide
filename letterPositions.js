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

const letterPositions = function(sentence) {
  let formattedText = sentence.split(" ").join("");
  let results = {};
  // console.log(sentence, " !== ", formattedText);
  for (let i = 0; i < formattedText.length; i++) {
    
    let value = formattedText[i];
    if (results[value]) {
      // console.log("push new value to array");
      results[value].push(i);
    } else {
      results[value] = [i];
    }
        
  }
  // console.log(results);
  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
