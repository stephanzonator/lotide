// const flatten = function(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       for (let j = 0; j < array[i].length; j++) {
//         result.push(array[i][j]);
//       }

//     } else {
//       result.push(array[i]);
//     }
   
//   }
//   return result;
// };

const flatten = function(array) {
  let result = [];

  const flatRecursion = (newArray) => {
    for (let i = 0; i < newArray.length; i++) {
      if (Array.isArray(newArray[i])) {
        flatRecursion(newArray[i]);
      } else {
        result.push(newArray[i]);
      }
    }
  }
  flatRecursion(array);
  
  return result;
};

module.exports = flatten;