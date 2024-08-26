// 1- Delayed Message Display-
function displayMessage() {
    console.log("Hello, World!");
}
setTimeout(displayMessage, 3000);


// 2- Time Logger-
function logTime() {
    // Function to log the current time
    const intervalId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();  //new Date().toLocaleTimeString() gets the current time in a human-readable format.
        console.log(currentTime);
    }, 2000);

    // Stop logging after 10 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped logging time!");  //clearInterval(intervalId) stops the interval, preventing further time logging.
    }, 10000);
}
logTime();


// 3- Delayed Sum Calculation-
function delayedSum(a, b) {
    setTimeout(() => {
        const sum = a + b;
        console.log(`The sum of ${a} and ${b} is ${sum}`);
    }, 2000);
}
delayedSum(5, 7);  // Logs "The sum of 5 and 7 is 12" after 2 seconds


// 5- Delayed Multiplication-
function delayedMultiplication(a, b) {
    return new Promise((resolve) => {  // Step 1: Create a new Promise
        setTimeout(() => {  // Step 2: Start a delayed task using setTimeout
            const product = a * b;  // Step 3: Calculate the product of a and b
            resolve(product);  // Step 4: Resolve the promise with the product
        }, 1000);  // Step 5: Wait for 1 second (1000 milliseconds)
    });
}
delayedMultiplication(3, 4).then((result) => {  // Step 6: Use .then to handle the result
    console.log(`The product is ${result}`);  // Logs "The product is 12" after 1 second
});

