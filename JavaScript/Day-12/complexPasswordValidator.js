/*
Q1. Complex Password Validator:
Write a regular expression to validate passwords with the following criteria:
At least one lowercase letter, one uppercase letter, one digit, and one special character (@, #, $, %, &, *).
The length must be between 12 and 20 characters.
No spaces allowed.
Write a function that takes an array of passwords and returns an array of passwords that pass the validation.
*/

function validatePasswords(passwords) {
    // Regular expression for complex password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;
  
    // Filter the array of passwords based on the regular expression
    return passwords.filter(password => passwordRegex.test(password));
  }
  
  // Example usage:
  const passwords = [
    "StrongPass1@",      // Valid
    "weakpass123",       // Missing uppercase letter and special character
    "Short1$",           // Too short
    "ValidPassword1#",   // Valid
    "Invalid@Password",  // Missing digit
    "Another@Pass1",     // Valid
    "OneMoreValid1$"     // Valid
  ];
  
  const validPasswords = validatePasswords(passwords);
  console.log(validPasswords); // ["StrongPass1@", "ValidPassword1#", "Another@Pass1", "OneMoreValid1$"]
  