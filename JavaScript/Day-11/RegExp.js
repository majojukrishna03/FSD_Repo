/*
Q3. REGEXP GOLF
Code golf is a term used for the game of trying to express a particular program in as few characters as
possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a
given pattern and only that pattern.
For each of the following items, write a regular expression to test whether the given pattern occurs in a string.
The regular expression should match only strings containing the pattern. When your expression works, see
whether you can make it any smaller.
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
Refer to the table in the chapter summary for help. Test each solution with a few test strings.
// Fill in the regular expressions
*/

verify(/ca[rt]/,                 //This matches either "car" or "cat" by using a character set [rt] to match either "r" or "t".
    ["my car", "bad cats"],
    ["camper", "high art"]);
verify(/pr?op/,                         //The r? makes the "r" optional, so this regex matches both "pop" and "prop".
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);
verify(/ferr(et|y|ari)/,                  //This regex uses a non-capturing group (et|y|ari) to match any of the three endings "et", "y", or "ari" following "ferr".
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);
    
verify(/\b\w+ious\b/,                      //This matches any word that ends with "ious". The \b asserts word boundaries, and \w+ matches one or more word characters before "ious".
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);
verify(/\s[.]/,                            //This matches any whitespace character (\s) followed by a fullstop.
    ["bad punctuati1on ."],
    ["escape the period"]);
verify(/\b\w{7,}\b/,                        //This matches any word that is at least 7 characters long. The {7,} specifies "7 or more" characters.
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);
verify(/\b[a-df-zA-DF-Z]+\b/,               //This  matches any word that contains only letters from "a" to "z" or "A" to "Z" but specifically excludes "e" and "E" by splitting the ranges in the character set.
    ["red platypus", "wobbling nest"],
    ["earth bed", "bedrøvet abe", "BEET"]);
    
function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}