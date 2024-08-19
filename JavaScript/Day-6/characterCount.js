/*
You can get the Nth character, or letter, from a string by writing [N] after the string (for
example, string[2]). The resulting value will be a string containing only one character
(for example, "b"). The first character has position 0, which causes the last one to be
found at position string.length - 1. In other words, a two-character string has length 2,
and its characters have positions 0 and 1.

Write a function called countBs that takes a string as its only argument and returns a
number that indicates how many uppercase B characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a
second argument that indicates the character that is to be counted (rather than
counting only uppercase B characters). Rewrite countBs to make use of this new
function.

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

*/


//Function that takes a string and returns a number that indicates how many "B" characters are there in the string.

function countBs(s) {
    count = 0
    for(let i =  0; i < s.length; i++ ) {
        if (s[i] === 'B') {
            count += 1
        }
    }
    return count
}

//Testcases:
s = ["BOB","","Banana","BBB"]
for(let str of s) {
    console.log(`The count of 'B' in the string ${str} is : ${countBs(str)}`)
}

console.log("-----------------------------------------------------------------------")


//Function that takes a string and character as parameters and returns the count of that character in the string.

function countchar(s,char) {
    c = 0
    for(let i =  0; i < s.length; i++ ) {
        if (s[i] === char) {
            c += 1
        }
    }
    return c
}

//Testcases:
a = [["BOB",'o'],["",'a'],["Mississippi",'s'],["hello world", 'l']]
for(let pair of a) {
    console.log(`The count of character ${pair[1]} in the string ${pair[0]} is : ${countchar(pair[0],pair[1])}`)
}