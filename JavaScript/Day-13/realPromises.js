/*
Q2. REAL PROMISES
Rewrite the function from the previous exercise without async/await, using plain Promise methods.
function activityTable(day) {
// Your code here
}
activityTable(6)
.then(table => console.log(activityGraph(table)));

In this style, using Promise.all will be more convenient than trying to model a loop over the logfiles. In
the async function, just using await in a loop is simpler. If reading a file takes some time, which of
these two approaches will take the least time to run?
If one of the files listed in the file list has a typo, and reading it fails, how does that failure end up in
the Promise object that your function returns?
*/

// Simulated textFile function
function textFile(filename) {
    // Simulating the textFile function that reads and returns the content of a file.
    // In real scenarios, this function would read from the file system.
    const fileContents = {
      "camera_logs.txt": "log1.txt\nlog2.txt\nlog3.txt",
      "log1.txt": "1695709940692\n1695701068331\n1695701189163",
      "log2.txt": "1695708000000\n1695709000000\n1695710000000",
      "log3.txt": "1695711000000\n1695712000000\n1695713000000",
    };
    return Promise.resolve(fileContents[filename]);
  }
  
  // The activityTable function rewritten using Promises
  function activityTable(day) {
    return textFile("camera_logs.txt")
      .then((logFileList) => {
        let logFiles = logFileList.split("\n");
        return Promise.all(
          logFiles.map((logFile) => textFile(logFile).then((logContent) => logContent.split("\n")))
        );
      })
      .then((allLogs) => {
        let hourCounts = Array(24).fill(0);
  
        allLogs.forEach((timestamps) => {
          timestamps.forEach((timestamp) => {
            let date = new Date(Number(timestamp));
            if (date.getDay() === day) {
              let hour = date.getHours();
              hourCounts[hour]++;
            }
          });
        });
  
        return hourCounts;
      });
  }
  
  // Example usage:
  activityTable(6) // Saturday
    .then((table) => console.log(activityGraph(table)));
  
  // Example implementation of the activityGraph function for visualization
  function activityGraph(table) {
    return table.map((count) => "#".repeat(count)).join("\n");
  }
  

/*
1. Which Approach Takes Less Time?

Promise.all approach generally takes less time than async/await with a loop in this context. This is because Promise.all allows all the promises to run concurrently, 
whereas using await in a loop runs each promise sequentially. If reading files takes some time, running them in parallel (using Promise.all) will be faster than running them one after the other.

2. Handling File Read Failures

If one of the files listed in the file list has a typo and reading it fails, the returned Promise will be rejected with an error. In the Promise.all approach:

If any individual promise fails (e.g., due to a typo in the filename), Promise.all will immediately reject with the error of that failed promise.
This rejection will propagate to the final promise chain, and you would need to handle it using .catch() on the returned promise from activityTable.
  */