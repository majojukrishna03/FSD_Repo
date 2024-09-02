/*
Q1. QUIET TIMES
There’s a security camera near Carla’s lab that’s activated by a motion sensor. It is connected to the
network and starts sending out a video stream when it is active. Because she’d rather not be
discovered, Carla has set up a system that notices this kind of wireless network traffic and turns on a
light in her lair whenever there is activity outside, so she knows when to keep quiet.
She’s also been logging the times at which the camera is tripped for a while and wants to use this
information to visualize which times, in an average week, tend to be quiet and which tend to be busy.
The log is stored in files holding one time stamp number (as returned by Date.now()) per line.
1695709940692
1695701068331
1695701189163
The "camera_logs.txt" file holds a list of logfiles. Write an asynchronous function activityTable(day)
that for a given day of the week returns an array of 24 numbers, one for each hour of the day, that
hold the number of camera network traffic observations seen in that hour of the day. Days are
identified by number using the system used by Date.getDay, where Sunday is 0 and Saturday is 6.
The activityGraph function, provided by the sandbox, summarizes such a table into a string.
To read the files, use the textFile function defined earlier—given a filename, it returns a promise that
resolves to the file’s content. Remember that new Date(timestamp) creates a Date object for that
time, which has getDay and getHours methods returning the day of the week and the hour of the day.
Both types of files—the list of logfiles and the logfiles themselves—have each piece of data on its
own line, separated by newline ("\n") characters.
*/

async function textFile(filename) {
    // Simulating the textFile function that reads and returns the content of a file.
    // In real scenarios, this function would read from the file system.
    const fileContents = {
      "camera_logs.txt": "log1.txt\nlog2.txt\nlog3.txt",
      "log1.txt": "1695709940692\n1695701068331\n1695701189163",
      "log2.txt": "1695708000000\n1695709000000\n1695710000000",
      "log3.txt": "1695711000000\n1695712000000\n1695713000000",
    };
    return fileContents[filename];
  }
  
  async function activityTable(day) {
    let logFileList = await textFile("camera_logs.txt");
    let logFiles = logFileList.split("\n");
  
    // Initialize an array of 24 numbers, all starting at 0
    let hourCounts = Array(24).fill(0);
  
    // Loop through each log file
    for (let logFile of logFiles) {
      let logContent = await textFile(logFile);
      let timestamps = logContent.split("\n");
      
      //The timestamps in the log files are given as large numbers (e.g., 1695709940692). 
      //These numbers represent the number of milliseconds that have passed since January 1, 1970 (known as the Unix epoch). 
      //To convert these timestamps into readable dates and times, you can use JavaScript's Date object.
      for (let timestamp of timestamps) {
        let date = new Date(Number(timestamp));   
  
        // Check if the log belongs to the specified day
        if (date.getDay() === day) {
          let hour = date.getHours();
          hourCounts[hour]++;
        }
      }
    }
  
    return hourCounts;
  }
  
  // Example usage:
  activityTable(1) // Monday
    .then(table => console.log(activityGraph(table)));           //Since no timestamps match Monday, the resulting hourCounts array will remain filled with zeros, representing no activity during any hour on Monday.
  
  // Example implementation of the activityGraph function for visualization
  function activityGraph(table) {
    return table.map(count => '#'.repeat(count)).join('\n');
  }
  