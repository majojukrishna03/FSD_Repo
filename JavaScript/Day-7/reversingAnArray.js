/*
Q2. REVERSING AN ARRAY
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For
this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an
array as its argument and produce a new array that has the same elements in the inverse order. The second,
reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by
reversing its elements. Neither may use the standard reverse method.
*/

//function that takes an array and returns the array by reversing elements

function reverseArray(arr) {
    result = []
    for(let i= arr.length -1 ; i >= 0 ; i--) {
        result.push(arr[i])
    }
    return result
}

arr = ["A", "B", "C"];
console.log(reverseArray(arr));   //output : ["C", "B", "A"];


//function with inplace reversing

function reverseArrayInPlace(arr) {
    let a = 0
    let b = arr.length - 1
    while(a < b) {
        [arr[a],arr[b]] = [arr[b],arr[a]]   //destructuring array 
        a+=1
        b-=1
    }
    return arr
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));  // output : [ 5, 4, 3, 2, 1 ]
