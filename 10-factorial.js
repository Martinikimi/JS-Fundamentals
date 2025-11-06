#!/usr/bin/node

// Recursive factorial function
function factorial(n) {
    // Factorial of NaN or 0 is 1
    if (isNaN(n) || n === 0) {
        return 1;
    }
    // Recursive case: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Get the argument and convert to integer
const num = parseInt(process.argv[2]);

// Compute and print the factorial
console.log(factorial(num));
