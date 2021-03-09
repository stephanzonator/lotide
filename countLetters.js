// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(sentence) {
  let formattedText = sentence.split(" ").join("");
  let results = {};
  console.log(sentence, " !== ", formattedText);
  for (let letter of formattedText) {
    
    // console.log(letter);
    if (results[letter]) {
      // console.log("character exists")
      results[letter] += 1;
    } else {
      // console.log("first time the character appears", results[letter])
      results[letter] = 1;
      // console.log("now that it's been added, it should show up", results[letter]);
    }
        
  }
  // console.log(results);
  return results;
};

console.log(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});

module.exports = countLetters;
