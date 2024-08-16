// Assignment 2

// Q1. Explain the difference between null and undefined in javascript? 
`
Answer: 
In JavaScript, null and undefined are both used to represent the absence of a value, but they have different meanings and are used in different contexts. 

1. null : It represents the intentional absence of any object value
2. undefined : It represents a variable that has been declared but has not yet been assigned a value.
`
//example for null:
let value = null;
console.log(value);   //output is null

//example for undefined: 
let value1;
console.log(value1);  //output is undefined

// Q2. What will be the output of the following code snippet, and why?

console.log('10' + 5);   //output is 105.  
'Answer : The + operator is used for both addition and string concatenation. When one of the operands is a string, JavaScript performs string concatenation instead of numeric addition.'
console.log('10' - 5);   //output is 5.
'Answer : The - operator is used only for subtraction, so JavaScript attempts to convert both operands to numbers. 10 is a string that can be converted to a number.'
console.log(true + 2);   // output is 3.
'Answer : When performing arithmetic operations, JavaScript converts true to 1 (since true is truthy) and false to 0 (since false is falsy).'
console.log(false + undefined);  //output is NaN.
'Answer : false is converted to 0 (a number), but undefined cannot be converted to a meaningful numeric value, so it results in NaN (Not-a-Number).'

// Q3. What is the difference between == and === in JavaScript? Provide examples.

'Answer : In JavaScript, == and === are comparison operators used to evaluate equality between two values. '
'== (Double Equals): Checks if the values are the same after converting them to the same type. So, it tries to make different types match before comparing.'
'=== (Triple Equals): Checks if the values are exactly the same without changing their types. Both the value and type must match.'

//example for double equals : 
console.log(0 == false);  // output is true.

//example for triple equals : 
console.log(0 === false);  // output is false.

// Q4. Predict the output of the following expressions and explain your reasoning:

console.log(0 == false);  //output is true.
'Answer : JavaScript converts false to 0 when using ==, so 0 == 0 is true.'
console.log(0 === false); //output is false.
'Answer : === checks both value and type. 0 is a number, and false is a boolean, so they are not equal.'
console.log('' == 0);    //output is true.
'Answer : A space is converted to 0 in a == comparison, so it equals 0.'
console.log('' === 0);   //output is false.
'Answer : With ===, the space(string) and 0 (number) are different types, so they are not equal.'

// Q5. Given the following code, what will be the output and why?

console.log(0 || 1 && 2 || 3);  //output is 2.
'The expression 0 || 1 && 2 || 3 evaluates to 2 because 1 && 2 (&& means multiplication) returns 2, and 0 || 2 || 3 (|| means addition) returns the first truthy value, which is 2.'
console.log(false || (true && false) || true);   //output is true.
'The expression false || (true && false) || true evaluates to true because true && false is false, so it simplifies to false || false || true, and the || operator returns the first truthy value, which is true.'
console.log(0 && 1 || 2 && 3);   //output is 3.
'The expression false || (true && false) || true evaluates to true because true && false is false, so it simplifies to false || false || true, and the || operator returns the first truthy value, which is true.'

// Q6. Predict the output of the following expressions and explain your reasoning:

let a = 10, b = 20, c = 30;
console.log(a + b * c);  //output is 610.
'The multiplication b * c is evaluated first due to operator precedence, resulting in 600. Then, a + 600 is calculated, giving 610.'
console.log((a + b) * c);  //output is 900.
'The parentheses force the addition a + b to be evaluated first, resulting in 30. This is then multiplied by c, giving 900.'
console.log(a + b > c ? a : b);  //output is 20.
'The expression a + b > c evaluates to false because a + b equals c. Therefore, the ternary operator returns b, which is 20.'
console.log((a > b) && (b >c) || (a > c));  //output is false.
'All conditions are false (a > b, b > c, and a > c), so the entire expression evaluates to false.'

// Q7. Analyze and explain the output of the following code snippets:

console.log([] + {});   //output is [object Object].
"The empty array [] converts to an empty string '', and the empty object {} converts to the string [object Object]. So, the result is '' + [object Object], which outputs [object Object]."
console.log({} + []);   //output is [object Object].
"The empty array [] converts to an empty string '', and the empty object {} converts to the string [object Object]. So, the result is '' + '[object Object]', which outputs [object Object]."
console.log([] == ![]);  //output is true.
"![] is false, and [] converts to '' (an empty string) in the comparison. The comparison becomes '' == false, which is true because both are treated as empty strings."
console.log('' == []);  //output is true.
"The empty string '' is compared to an empty array [], which also converts to ''. Since '' == '', the result is true."

// Q8. What will be the output of the following code, and why?

console.log(+"");      //output is 0
'The empty string "" converts to 0 using the unary plus.'
console.log(+true);    //output is 1
'true converts to 1 using the unary plus.'
console.log(+false);   //output is 0
'false converts to 0 using the unary plus.'
console.log(+null);    //output is 0
'null converts to 0 using the unary plus.'
console.log(+undefined);   //output is NaN
'undefined converts to NaN using the unary plus.'