/*
Question:
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after
it.
let abc = "abc";
console.log(abc.length);
// → 3
*/

let pattern = "#"; // Start with a single hash character

for (let i = 1; i <= 7; i++) {
    console.log(pattern);
    pattern += "#"; // Adding another hash character for the next line
}


