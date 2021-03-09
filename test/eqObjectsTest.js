const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it ("should correctly compare primitives", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it ("should correctly compare primitives, different sizes", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it ("should correctly compare arrays of the same size", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it ("should correctly compare arrays of different sizes", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});



//primitive tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
//array tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const ef = { e: 1, f: [1]};
const fe = { e: 1, f: 1};

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(ef, fe), false);