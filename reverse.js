const reverseFunction = function(array) {
  let trimmedArray = array.splice(2, array.length);
  for (let i = 0; i < trimmedArray.length; i++) {
    let result = [];
    for (let j = trimmedArray[i].length - 1; j >= 0; j--) {
      result = result + (trimmedArray[i][j]);
    }
    console.log(result);
  }

};

reverseFunction(process.argv);


//console.log(process.argv);