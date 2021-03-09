const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('should flatten any number of arrays', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should work on nested arrays', () => {
    assert.deepEqual(flatten([[[[1, [[2]]]]], [3, 4], [[[[[5]]]]], [6]]), [1, 2, 3, 4, 5, 6]);
  });

});
