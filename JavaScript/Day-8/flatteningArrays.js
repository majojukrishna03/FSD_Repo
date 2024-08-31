/*
Q1. FLATTENING
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a
single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
Result: [1, 2, 3, 4, 5, 6]
*/


let arrays = [[1, 2, 3], [4, 5], [6]];

// Use the reduce method to flatten the array
let flattenedArray = arrays.reduce(function(accumulator, currentArray) {
  // Combine the accumulator with the current array using concat
  return accumulator.concat(currentArray);
});

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]