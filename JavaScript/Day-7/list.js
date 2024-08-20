/*
Q3. A LIST
As generic blobs of values, objects can be used to build all sorts of data structures. A common data structure
is the list (not to be confused with arrays). A list is a nested set of objects, with the first object holding a
reference to the second, the second to the third, and so on:
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
The resulting objects form a chain, as shown in the following diagram:

A diagram showing the memory structure of a linked list. There are 3 cells, each with a value field holding a
number, and a 'rest' field with an arrow to the rest of the list. The first cell's arrow points at the second cell, the
second cell's arrow at the last cell, and the last cell's 'rest' field holds null.
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values
{value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both
independent lists, but they share the structure that makes up their last three elements. The original list is also
still a valid three-element list.
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which
takes an element and a list and creates a new list that adds the element to the front of the input list, and nth,
which takes a list and a number and returns the element at the given position in the list (with zero referring to
the first element) or undefined when there is no such element.
*/


//function that takes an element and list and returns a new list that the element is added at front
function prepend(element,list) {
    return {value : element, rest : list}
}

//function that takes a list and a number and returns the element at the given position
function nth(list,number) {
    let current = list
    let i = 0
    // Loop through the list until we reach the desired index or the end of the list
    while(current!=null) {
        if (i === number) {
            return current.value
        }
        current = current.rest
        i++
    }
    // if we reach end of the list without finding the nth element, return undefined
    return undefined
}


//function that takes array and build a list
function arrayToList(arr) {
    let list = null
    for (let i = arr.length -1; i >= 0; i--) {
        // list = {value : arr[i],rest : list} 
        list = prepend(arr[i],list)
    }
    return list
}

arr = [1,2,3]
console.log(arrayToList(arr))    //ouput: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }


//function that takes a list and return an array
function listToArray(list) {
    let result = []
    let i = 0
    let value
    while((value = nth(list,i)) != undefined) {
        result.push(value)
        i++
    }
    return result
}

// Example usage:
const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
console.log(listToArray(list)); // [1, 2, 3]
