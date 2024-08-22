/*
Q1. Explain the .map() function in JavaScript and provide three examples with detailed explanations.
*/

//The .map() function in JavaScript is a method that is used to create a new array populated with the results of calling a provided function on every element in the calling array.

//example 1: 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]
//Here, .map() is used to double each number in the array. 
//The callback function number * 2 is applied to every element in the numbers array, 
//resulting in a new array [2, 4, 6, 8].

//example 2:
const words = ['hello', 'world', 'javascript'];
const uppercased = words.map(function(word) {
    return word.toUpperCase();
});

console.log(uppercased); // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
//In this example, .map() converts each string in the words array to uppercase. 
// The callback function word.toUpperCase() is applied to each element, resulting in ['HELLO', 'WORLD', 'JAVASCRIPT'].


//example 3:
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = users.map(function(user) {
    return user.name;
});

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
//Here, .map() is used to extract the name property from each object in the users array. 
//The callback function user.name returns the name of each user, resulting in ['Alice', 'Bob', 'Charlie'].



/*
Q2. Explain the .reduce() function in JavaScript and provide three examples with detailed explanations.
*/

//The .reduce() function in JavaScript is a powerful method that allows you to iterate over an array and accumulate a single value from the array's elements.
//It executes a callback function on each element of the array (from left to right), passing the result of the previous iteration (the accumulator) 
//and the current element as arguments to the callback.

//example 1:
const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
//In this example, .reduce() iterates over the numbers array. 
//The accumulator starts at 0 (the initialValue), and during each iteration, the currentValue is added to it. 
//The result is the sum of all elements in the array.


//example 2:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
//Here, .reduce() is used to flatten an array of arrays into a single array. 
//The accumulator starts as an empty array []. 
//During each iteration, the currentValue (which is an array) is concatenated to the accumulator, resulting in a single, flattened array.


//example 3:
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});

console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 2 }
//In this example, .reduce() is used to count the occurrences of each fruit in the fruits array. 
//The accumulator is an object that stores the counts. During each iteration, the currentValue is checked in the accumulator object, and if it exists, its count is incremented; otherwise, it is set to 1



/* 
Q3. Explain the .filter() function in JavaScript and provide three examples with detailed explanations.
*/

//The .filter() function in JavaScript is used to create a new array containing only the elements of the original array that pass a test implemented by the provided function.

//example 1:
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
//In this example, the .filter() function iterates over the numbers array and includes only those elements that are even (number % 2 === 0). 
//The result is a new array evenNumbers containing only the even numbers from the original array.


//example 2:
const words1 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const longWords = words1.filter(word => word.length > 6);

console.log(longWords); // Output: ['exuberant', 'destruction', 'present']
//Here, .filter() is used to create a new array that contains only the words from the words array that are longer than 6 characters. 
//The callback function checks the length of each word, and only those that pass the test are included in the longWords array.


//example 3:
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 79 },
    { name: 'David', grade: 95 },
];

const topStudents = students.filter(student => student.grade > 90);

console.log(topStudents);  // Output: [{ name: 'Bob', grade: 92 }, { name: 'David', grade: 95 }]
//In this example, .filter() is used to filter out students who scored more than 90. 
//The callback function checks the grade property of each student object. 
//Only the objects representing students with a grade higher than 90 are included in the topStudents array.