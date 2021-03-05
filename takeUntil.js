const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    // console.log(element, " ", callback(element));
    if (callback(element) === false) {
      results.push(element);
      // console.log("element added:", element, results)
      // console.log("element: ", element);
      // console.log("not truthy");
    } else {
      // console.log("element: ", element);
      // console.log("truthy")
      return results;
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
