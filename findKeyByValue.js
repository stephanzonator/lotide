const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);