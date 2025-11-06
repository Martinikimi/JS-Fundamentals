#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg);

// Check if the conversion resulted in a valid number
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number:", num);
}
