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


// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;