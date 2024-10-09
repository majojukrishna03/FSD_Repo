/*
Q3. Building Promise.all
As we saw, given an array of promises, Promise.all returns a promise that waits for all of the promises
in the array to finish. It then succeeds, yielding an array of result values. If a promise in the array fails,
the promise returned by all fails too, passing on the failure reason from the failing promise.
Implement something like this yourself as a regular function called Promise_all.
Remember that after a promise has succeeded or failed, it can’t succeed or fail again, and further
calls to the functions that resolve it are ignored. This can simplify the way you handle a failure of your
promise.
*/

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
      // Handle case where input is not an array
      if (!Array.isArray(promises)) {
        return reject(new TypeError('Argument must be an array'));
      }
  
      // If input array is empty, resolve with an empty array
      if (promises.length === 0) {
        return resolve([]);
      }
  
      // Array to hold the results of the promises
      let results = [];
      let completed = 0;
  
      // Function to handle individual promise resolution
      function handlePromise(promise, index) {
        // Ensure promise is handled properly
        Promise.resolve(promise).then(
          (value) => {
            results[index] = value; // Store the result
            completed++; // Increment count of completed promises
            // If all promises are completed, resolve with results array
            if (completed === promises.length) {
              resolve(results);
            }
          },
          (error) => {
            // If any promise rejects, reject the whole Promise_all
            reject(error);
          }
        );
      }
  
      // Process each promise in the input array
      promises.forEach((promise, index) => {
        handlePromise(promise, index);
      });
    });
  }
  
  // Test code
  Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });
  
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
  });
  
  Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
      console.log("We should not get here");
    })
    .catch(error => {
      if (error != "X") {
        console.log("Unexpected failure:", error);
      } else {
        console.log("Expected error:", error);
      }
    });
  

//Output : 
/*
This should be []: []
Expected error: X
This should be [1, 2, 3]: [ 1, 2, 3 ]
*/