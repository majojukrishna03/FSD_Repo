/*
Q2. Extract and Modify Data from a Log File:
Given a log file containing lines in the following format:
2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1
Write a regex to extract the date, username, and IP address.
Then, write a function that replaces all IP addresses with the string ‘[REDACTED]’ and returns the modified log.
*/

const regex = /^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) - Error: User (\w+) failed to login from IP (\d+\.\d+\.\d+\.\d+)$/;

function extractData(logLine) {
    const match = logLine.match(regex);
    if (match) {
        const [_, date, time, username, ipAddress] = match;
        return { date, time, username, ipAddress };
    } else {
        throw new Error("Log line format is incorrect");
    }
}

function replaceIpAddresses(log) {
    // Define the regex pattern for IP addresses
    const ipPattern = /\d+\.\d+\.\d+\.\d+/g;
    
    // Replace all occurrences of the IP address with '[REDACTED]'
    return log.replace(ipPattern, '[REDACTED]');
}

// Example usage
const logLine = "2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1";

try {
    const data = extractData(logLine);
    console.log(`Date: ${data.date}, Time: ${data.time}, Username: ${data.username}, IP Address: ${data.ipAddress}`);
    
    const modifiedLog = replaceIpAddresses(logLine);
    console.log(`Modified Log: ${modifiedLog}`);
} catch (error) {
    console.error(error.message);
}


//output: 
//Date: 2024-08-28, Time: 14:32:01, Username: john_doe, IP Address: 192.168.1.1
//Modified Log: 2024-08-28 14:32:01 - Error: User john_doe failed to login from IP [REDACTED]