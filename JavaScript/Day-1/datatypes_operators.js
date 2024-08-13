// Data types
// 1. Number : Represents both integer and floating point numbers
// examples: 
console.log()
console.log("Examples for Number datatype : ")
console.log(42)    //type is number
console.log(3.14)  //type is number
console.log(-7)    //type is number
console.log(0)     //type is number
console.log(0.78)  //type is number

// 2. Special Numbers : Divided into 3 types
//  a. Infinity: Represents a value greater than any finite number
// examples: 
console.log()
console.log("Examples for Infinity Number datatype : ")
console.log(1/0)    //type is number
console.log(Number.POSITIVE_INFINITY) 
console.log(Number.MAX_VALUE*2)
console.log(Infinity)
console.log(Infinity+1)


//  b. negative Infinity : Represents a value smaller than any negative finite number.
// examples: 
console.log()
console.log("Examples for negative Infinity number datatype : ")
console.log(-1/0)    //type is number
console.log(-Number.POSITIVE_INFINITY) 
console.log(-Number.MAX_VALUE*2)
console.log(-Infinity)
console.log(-Infinity+1)

//  c. Not a number (NaN) : Represents a value that is not a valid number, usually the result of an undefined mathematical operation.
// examples: 
console.log()
console.log("Examples for NaN number datatype : ")
console.log("a" * 2)         //output is NaN
console.log(Math.sqrt(-1))
console.log(0/0)
console.log("a" / 5)
console.log(1/"a")

// 3. Strings : Represents a sequence of characters enclosed in single (''), double (""), or backticks (``).
// examples:
console.log()
console.log("Examples for String datatype : ")
a = 10
console.log('123')          // type is strings
console.log("Hi, My name is Murali.")
console.log(`Hello world
    This is sample code.`)
console.log(`Hey, this exam is for ${a} marks`)
console.log('...')

// 4. Boolean : Represents one of two values - true or false.
// examples: 
console.log()
console.log("Examples for Boolean datatype : ")
console.log(true)        // type is boolean
console.log(5>3)
console.log(true > false)
console.log(false > 1)
console.log(Boolean(0))

// 5. Empty values divided into 2 types
//   a. null : Represents the intentional absence of any object value.
// examples:
console.log()
console.log("Examples for null empty values data type : ")
let b = null;
console.log(b)           //type is null
let data = { name: "John" }
data = null;
console.log(data) 
let arr = [1, 2, null, 4, 5]
console.log(arr[2])


//  b. undefined : 
//examples: 
console.log()
console.log("Examples for undefined empty values datatype : ")
let count; 
console.log(count)       //type is undefined
let person = { name: "Alice" }
console.log(person.age)
let item = undefined
console.log(item)

// Operators 
// a. Arithmetic operators : used to perform mathematical operations
//examples: 
console.log()
console.log("Arithmetic operations : ")
console.log(5+3)
console.log(9-5)
console.log(8*2)
console.log(8/4)
console.log(5%2)

// b. Unary operators : uses only single operand to give result
//examples: 

console.log()
console.log("Unary operations : ")
console.log(+5)
console.log(-"10")
let c = 8
console.log(++c)
console.log(c--)
console.log(!1)

// c. Logical operators : used to perform logical operations
// examples: 
console.log()
console.log("Logical operations : ")
console.log(true && true)
console.log(true || true)
console.log(true && 5 >2)
console.log(!false)
console.log(false || false)

// d. Ternary Operator : A shorthand for an if-else statement that takes three operands: a condition, a value if true, and a value if false.
//examples: 

console.log()
console.log("Ternary operator: ")
let age = 18; let canVote = (age >= 18) ? "Yes" : "No"
console.log(canVote)
let num = 5; let isEven = (num % 2 === 0) ? "Even" : "Odd"
console.log(isEven)
let user = "Guest"; let greeting = user ? "Hello, " + user : "Hello, Stranger"
console.log(greeting)
let loggedIn = true; let access = loggedIn ? "Granted" : "Denied"
console.log(access)
let x = 10; let pos = (x > 5) ? "Above" : "Below"
console.log(pos)

// Automatic type conversion : The process where JavaScript automatically converts a value from one data type to another as needed by the context of the operation.
// examples: 
console.log()
console.log("Automatic type conversion :")
console.log("5" * 2)
console.log("10" - 2)
console.log(5 + " apples")
console.log(123 + "")
console.log(null + 4)