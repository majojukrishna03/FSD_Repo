/*
Q3. Basic Try-Catch Block
Write a simple function that divides two numbers. If the divisor is zero, the function should throw an error with
the message "Division by zero is not allowed." Use a try-catch block to handle this error and display an
appropriate message to the user.
*/

function divideNumbers(a, b) {
    try {
      // Check if the divisor is zero
      if (b === 0) {
        // Throw an error if b is zero
        throw new Error("Division by zero is not allowed.");
      }
      // Return the result of the division
      return a / b;
    } catch (error) {
      // Handle the error and display an appropriate message
    //   console.log(error.message);
        return error.message
    }
  }
  
  // Example usage:
  const result1 = divideNumbers(10, 2); // Should return 5
  console.log("Result 1:", result1);
  
  const result2 = divideNumbers(10, 0); // Should trigger the error and display the message
  console.log("Result 2:", result2); // Should be undefined because of the error
  