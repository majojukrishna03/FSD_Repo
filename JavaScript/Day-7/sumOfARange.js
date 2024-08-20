/*
Q1. THE SUM OF RANGE
Write a range function that takes two arguments, start and end, and returns an array containing all the
numbers from start up to and including end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the
example program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the
“step” value used when building the array. If no step is given, the elements should go up by increments of one,
corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this
also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

//range function that takes two arguments and returns an array containing all the numbers in the range.

function num_Range(start,end) {
    let range = []
    for (let i = start ; i <= end ; i++) {
        range.push(i)
    }
    return range
}

console.log(num_Range(1, 10));    //output : [1,2,3,4,5,6,7,8,9,10]


//sum function that takes the array of numbers and returns the sum.

function sum(nums) {
    let total = 0
    for (let i = 0 ; i < nums.length ; i++) {
        total += nums[i]
    }
    return total
}

console.log(sum(num_Range(1,10)))    //output : 55


//Bonus : range function using step 

function num_Range_Step(start,end,step = 1) {
    let range = []
    if (step > 0) {
        for (let i = start ; i <= end ; i += step) {
            range.push(i)
        }
    } else {
        for (let i = start ; i >= end ; i += step) {
            range.push(i)
        }
    }
    return range
}

console.log(num_Range_Step(5,2,-1))