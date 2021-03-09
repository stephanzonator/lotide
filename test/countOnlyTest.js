const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#count Only", () => {
  it ("should correctly identify names selected", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it ("should correctly identify names not selected as undefined", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it ("should correctly count multiples of selected names", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});

//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
