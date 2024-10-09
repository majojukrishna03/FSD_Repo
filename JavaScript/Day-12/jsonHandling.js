/*
Q4. Handling JSON Parsing Errors

Write a function that takes a JSON string as input and attempts to parse it into a JavaScript object. Use a try-
catch block to handle any errors that occur during parsing, such as invalid JSON format. If an error is caught,

the function should return a default empty object {} and log an error message to the console.
*/

function parseJson(jsonString) {
    try {
      // Attempt to parse the JSON string
      return JSON.parse(jsonString);
    } catch (error) {
      // Handle the error if JSON is invalid
      console.log("Error parsing JSON:", error.message);
      // Return a default empty object
      return {};
    }
  }
  
  // Example usage:
  const validJson = '{"name": "John", "age": 30}';
  const invalidJson = '{"name": "John", "age": 30'; // Missing closing brace
  
  const result1 = parseJson(validJson);
  console.log("Result 1:", result1); // Should return the parsed object
  
  const result2 = parseJson(invalidJson);
  console.log("Result 2:", result2); // Should return {} and log an error message
  