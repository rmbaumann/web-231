/*
============================================
; Title: baumann-exercise-3.2.js
; Author: Reva Baumann 
; Date:   24 February 2019
; Modified By: Reva Baumann
; Description: Use else...if statements to match functions
;===========================================
*/

/*
    Expected output:
    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the if...else blocks
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 3.2"));

// declare variables of Truck, Car, Bike, Three, Four, Bike
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike"
var testVar4 = "Three"
var testVar5 = "Four"
var testVar6 = "Bike"

// Function that checks the values between two variables and assigns an output of true or false, using if/else statements
function match(arg1, arg2) {
    if (arg1 == arg2)
        return true
    else   
        return false
}

// Function defining an output of matching or mismatching, declaring do not or do.
function logMismatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do not match!")
}

function logMatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do match!");
}

//output from the match() function
console.log(match("A", "B"));
console.log(match(2, 2));

//conditional "if...else" statements. Include checks for all six (6) test variables
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

// conditional "if...else" statements, checks for all six (6) variables
if(match(testVar3, testVar6)) {
    logMatch(testVar3, testVar6);
} else {
    logMismatch(testVar3, testVar6);
}

// conditional "if...else" statements, checks for all six (6) variables
if(match(testVar5, testVar4)) {
    logMatch(testVar5, testVar4);
} else {
    logMismatch(testVar5, testVar4)
}

//output