// Video 1 : History of javascript
//   - 1990: Rise of the Internet
//         Internet became popular as a concept for sharing information.
//         Companies wanted to share information online, leading to the creation of websites using HTML and CSS for static pages.
//   - 1993: Mosaic Browser
//         Mosaic was a popular browser that allowed users to view web pages.
//         This led to the formation of Netscape, which developed the Netscape Navigator browser.
//   - 1995: Birth of Javascript
//         Netscape needed a way to make web pages interactive.
//         Brendan Eich was hired and developed a new language in just 10 days, initially named Mocha.
//         The language was renamed LiveScript and eventually JavaScript to leverage Java's popularity.
//         JavaScript was released in Netscape Navigator 2.0.
//   - Competition with Microsoft
//         Microsoft reverse-engineered JavaScript and created JScript for Internet Explorer (IE).
//         This led to compatibility issues, with websites needing to specify whether they were best viewed in Netscape Navigator or IE.
//   - ECMA Script
//         To resolve compatibility issues, Netscape went to the ECMA International organization.
//         ECMAScript was created as a standard, with the first version (ECMAScript 1) released in 1997.
//         ECMAScript 3 was released in 1999.
//   - 2000: Dot-com Bubble Burst 
//         The dot-com bubble burst, leading to a decline in the tech industry.
//         Netscape was sold to AOL, and its browser code became the foundation for Firefox.
//   - ECMAScript 4 delays
//         Development of ECMAScript 4 faced delays due to the complexity of implementing new features.
//         Instead, a minor update, ECMAScript 3.1, was released.
//   - Macromedia ActionScript
//         Macromedia adopted the ECMAScript 4 specification for their scripting language, ActionScript.
//   - 2005: Rise of AJAX
//         AJAX allowed web pages to update dynamically without reloading, leading to the development of single-page applications (SPAs).
//         This gave a significant boost to JavaScript's popularity.
//   - 2008: Google's V8 Engine
//         Google introduced the V8 engine in their Chrome browser, which combined compilation and interpretation, making JavaScript faster.
//         This led to the creation of Node.js, allowing JavaScript to be used for back-end development and beyond.   
//   - 2009: ECMAScript 5
//         After a 10-year gap, ECMAScript 5 was released, solidifying JavaScript's place in web development.
//         Node.js allowed JavaScript to run on the server side, making it possible to build full-stack applications using a single language.
//         This led to the rise of JavaScript frameworks and libraries for server-side development.
//   - 2010: Emergence of Modern JavaScript Frameworks
//         AngularJS was introduced by Google, enabling developers to create dynamic, single-page applications (SPAs).
//   - 2012: ECMAScript 6 (ES6) 
//         Work on ECMAScript 6, also known as ES6 or ECMAScript 2015, began.
//         ES6 introduced significant features like classes, modules, arrow functions, template literals, and the let and const keywords.
//   - 2013: React.js by Facebook
//         Facebook released React.js, a JavaScript library for building user interfaces.
//         React popularized the concept of component-based architecture and introduced JSX (JavaScript XML).  
//   - 2015: Official Release of ECMAScript 6 (ES6)
//         ECMAScript 6 was officially released, bringing modern features to the language.
//         The release helped JavaScript evolve into a more powerful and developer-friendly language.
//   - 2016: ECMAScript 7 (ES7)
//         ES7 was released with a smaller set of updates, including the exponentiation operator (**) and Array.prototype.includes().
//   - 2017: ECMAScript 8 (ES8)
//         ES8 introduced features like async/await, Object.entries(), Object.values(), and padStart/padEnd for strings.
//   - Later on , version names were changed to the year they released. 


// Video 2 : Data types in javascript 1


// JavaScript has two main categories of data types:
//     - Primitive Data Types
//     - Object Data Types

// 1. Primitive Data Types
//     Primitive data types are the most basic data types and include the following:

//         Number: Represents both integer and floating-point numbers.
//         To check the data type , we use typeof (variale/value).
//         BigInt: a number which is greater than Number.MAX_Value. 
//         a normal number added with n at last is bigint number. 
      
//example for number:
    console.log(42)    //type is number
    console.log(Number.MAX_VALUE*2)  // this is infinity
    let a = 1111111111111111111111111111   
    console.log(typeof a)           //this is number
    let b = 1111111111111111111111111111n
    console.log(typeof b)           // this is bigint


// Video 3 : Data types in javascript 2


    // String: Represents text data or sequence of characters.
    //example
        let user = "naveenready";
        console.log(user); // Output: naveenready
            'Concatenation: Combining two strings using the + operator.'
            //example
                let firstName = "naveen";
                let lastName = "ready";
                let fullName = firstName + " " + lastName;
                console.log(fullName); // Output: naveen ready
            'Escape Characters: Used to include special characters in strings.'
                'Double Quotes: Use single quotes to enclose the string if you want to include double quotes inside.'
                //example
                    let quote = 'He said, "Hello!"';
                    console.log(quote); // Output: He said, "Hello!"
                'Backslash (\): Escape character to include quotes or special characters.'
                //example
                    let escapedQuote = "He said, \"Hello!\"";
                    console.log(escapedQuote); // Output: He said, "Hello!"
                'New Line (\n): Adds a new line in the string.'
                //example
                    let multiLineString = "First line\nSecond line";
                    console.log(multiLineString);
                    // Output:
                    // First line
                    // Second line
                'Tab (\t): Adds a tab space.'
                //example
                    let tabbedString = "First\tSecond";
                    console.log(tabbedString); // Output: First    Second
                'Vertical Tab (\v): Adds a vertical tab (behavior may vary by terminal).'
                //example
                    let verticalTab = "First\vSecond";
                    console.log(verticalTab);
                'Backspace (\b): Removes the previous character.'  
                //example
                    let backspaceExample = "Hello\bWorld";
                    console.log(backspaceExample); // Output: HellWorld


    // Boolean: Represents logical values: true or false.
    //example-1
        let isGreater = 5 > 6;
        console.log(isGreater); // Output: false
    //example-2
        let isLess = 5 < 6;
        console.log(isLess); // Output: true
    //example-3
        console.log(typeof isGreater); // Output: boolean


    // Null: Represents the intentional absence of any object value.
    //example
        let u = null;
        console.log(u); // Output: null


    // Undefined: Represents an uninitialized variable.
    //example
        let A;
        console.log(A); // Output: undefined
    
    
    // NaN: A special number value indicating an invalid operation.
    //example
        let invalidNum = 5 / "string";
        console.log(invalidNum); // Output: NaN


// Video 4. Type conversion and Coercion


    //Type conversion : the process of converting a value from one data type to another by using functions or methods. 
        //example - 1: 
            let str = "42";
            let num = Number(str);  // Explicit conversion from string to number
            console.log(num);  // Output: 42
        //example - 2:
            let n = 123;
            let s = String(num);  // Explicit conversion from number to string
            console.log(s);  // Output: "123"
        //example - 3:
            let bool = true;
            let st = String(bool);  // Explicit conversion from boolean to string
            console.log(st);  // Output: "true"
    
    //Type Coercion : the automatic conversion of values from one data type to another.
        //example - 1: 
            let num_ = 10;
            let result = "The number is " + num_;  // Implicit conversion of number to string
            console.log(result);  // Output: "The number is 10"

        //example - 2:
            let value = true;
            let res = value + 5;  // Implicit conversion of boolean to number (true becomes 1)
            console.log(res);  // Output: 6
            
        //example - 3:
            let num_a = 42;
            let str_a = "42";
            console.log(num_a == str_a);  // Output: true (Implicit conversion of string to number for comparison)


// Video 5. Arithematic Operators 


    // Artithematic operators: used to perform mathematical operations
        //examples: 
            console.log(8*2)     // Output: 16
            console.log(8/4)     // Output: 2
            console.log(5%2)     // Output: 1


// Video 6. Relational Operators


    // Relational operators: used to compare the values or operations
        //examples:
            console.log(10 > 5);  // Output: true
            console.log(9 <= 4);  // Output: false
            console.log(5 === "5");  // Output: false


// Video 7. Logical Operators


    //Logical operators: used to perform logical operations
        // examples:
            console.log(true && true)
            console.log(true || true)
            console.log(true && 5 > 2)


// Video 8. Ternary Operators

    //Ternary operators: A shorthand for an if-else statement that takes three operands: a condition, a value if true, and a value if false.
        //example - 1 : 
            let user_1 = "Guest"; let greeting = user_1 ? "Hello, " + user_1 : "Hello, Stranger"
            console.log(greeting)

        //example - 2 :
            let loggedIn = true; let access = loggedIn ? "Granted" : "Denied"
            console.log(access)

        //example - 3 : 
            let x = 10; let pos = (x > 5) ? "Above" : "Below"
            console.log(pos)


// Video 9. Template Literals

    //Template Literals: A template literal is a feature in JavaScript that allows you to create strings that can contain embedded expressions
        //example - 1 :
            const person = 'Evan';
            const greet = `Hello, ${person}! Welcome back.`;
            console.log(greet); // Output: Hello, Evan! Welcome back.

        //example - 2 ;
            const num1 = 7;
            const num2 = 4;
            const result_1 = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
            console.log(result_1); // Output: The sum of 7 and 4 is 11.

        //example - 3 :
            const message = `Welcome to JavaScript.
            This is a multi-line string example.
            Enjoy coding!`;
            console.log(message);
            /* Output:
            Welcome to JavaScript.
            This is a multi-line string example.
            Enjoy coding!
            */

