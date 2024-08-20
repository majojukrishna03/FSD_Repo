/*
Define the function min that takes two arguments and returns their minimum. We should not
use Math.min() we need to implement one our own.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

function minimum(a,b) {
    if (a<b) {
        return a
    } else {
        return b
    }
}

console.log(minimum(0,10))     //output : 0
console.log(minimum(0,-10))    //output : -10