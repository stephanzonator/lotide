//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]) , false); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS

describe("#eqArrays", () => {
  it("returns true when comparing identical arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns unequal when comparing values of different types", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
  });

  it("returns unequal when comparing arrays of different sizes", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });

  it("returns unequal when comparing arrays with identical values in different orders", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

});