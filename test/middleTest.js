// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]),[]);

// console.log(typeof middle([1, 2, 3, 4, 5, 6]));
// console.log(typeof [3,4]);


describe("#middle", () => {
  it("returns the middle two values of an even-numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns the middle two values of an even-numbered array, take 2", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns the middle value of an odd-numbered array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns an empty array when less than 3 values", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns the middle value of an odd-numbered array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});