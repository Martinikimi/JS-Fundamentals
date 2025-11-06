#!/usr/bin/node

// Check if there's a third element in process.argv (the first actual argument)
// process.argv[0] = 'node', process.argv[1] = script name, process.argv[2] = first argument
if (process.argv[2] === undefined) {
    console.log("No argument");
} else {
    console.log(process.argv[2]);
}
