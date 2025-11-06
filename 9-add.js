#!/usr/bin/node

// Define the add function as required
function add(a, b) {
    return a + b;
}

// Get the two arguments and convert to integers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Print the result of adding the two numbers
console.log(add(num1, num2));
