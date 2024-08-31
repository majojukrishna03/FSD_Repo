/*
Q3. EVERYTHING
Arrays also have an every method analogous to the some method. This method returns true when
the given function returns true for every element in the array. In a way, some is a version of the ||
operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate function as parameters. Write two
versions, one using a loop and one using the some method.
// Skeleton code
function every(array, test) {
// Your Code...
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
*/

//version 1 : using while loop.
function every(array,test) {
    i = 0
    while(i<array.length) {
        if (!test(array[i])) {
            return false
        }
        i++
    }
    return true
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true



//version 2 : using some method.
function every_Some_Method(array,test) {
    return (!array.some(element => !(test(element))))
}

console.log(every_Some_Method([1, 3, 5], n => n < 10));
// → true
console.log(every_Some_Method([2, 4, 16], n => n < 10));
// → false
console.log(every_Some_Method([], n => n < 10));
// → true