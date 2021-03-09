// const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length < 2) {
    return [];
  } else {
    return array.slice(1, (array.length));
  }
};

// //my tests
// console.log(tail(["a", "b", "c", "d", "e"]));
// console.log(tail([]));
// console.log(tail(["singleton"]));

module.exports = tail;