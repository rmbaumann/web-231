/*
============================================
; Title: baumann-assignment-3.4.js
; Author: Reva Baumann 
; Date:   24 February 2019
; Modified By: Reva Baumann
; Description: Program that uses for, while, if or switch statements with two errors. 
;===========================================
*/

/*
    Expected output:
    FirstName LastName
    Assignment 3.4
    Today's Date

    // Expected output: Use looping statements, if...else statements and match function to test variables.
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 3.4"));

// Name of the game
console.log("\n--DO THE NUMBERS MATCH GAME--")

// Declare variable and assign it a value of (6) six
var checkNumber = 6;

// Define an output for a mismatch of (2) two variables and writes a string, passed to the console.log
function logMismatch(checkNumber, chance) {
    console.log(checkNumber + " and " + chance + " do not match!");
}

// Define an output for a match of (2) variables and writes a string, passed to the console.log
function logMatch(checkNumber, chance) {
    console.log(checkNumber + " and " + chance + " do match!");
}

// Function that returns a random integer value
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
}

// Loop declares a variable counter and assigns it a value of 0 to ensure the loop will run for 10 iterations
for (var counter = 0; counter < 10; counter++){
    var chance = randomNumber(); // declares a local variable of chance and calls to randomNumber to assign a random number
    if (checkNumber === chance) // If statement checking the boolean value of checkNumber and chance for a match, if match call logMatch and pass value
    logMatch (checkNumber, chance);
    else
    logMismatch (checkNumber, chance); // If checkNumber and chance do not match, call log misMatch and pass values
}

//end program
