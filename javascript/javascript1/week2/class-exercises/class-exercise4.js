// Create a function that has two parameters: stringToLog and numberOfTimesToLog

// When calling the function it should log out the stringToLog the amount of times
// specified in numberOfTimesToLog. Use a for loop.

function consoleFunction(stringToLog, numberOfTimesToLog) {
    for(let i = 0; i < numberOfTimesToLog; i++){
        console.log(stringToLog);
    }
}

consoleFunction("Hello!!!", 7);

