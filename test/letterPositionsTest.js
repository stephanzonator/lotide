const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letter Positions", () => {
  it ("should correctly identify the second letter in the word", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});