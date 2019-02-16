/*
============================================
; Title:  baumann-exercise-2.3.js
; Author: Professor Krasso 
; Date:   16 February 2019
; Modified By: Reva Baumann
; Description: Displays a formatted header
;===========================================
*/

// start program

// lists details of formatted header, including first name, last name and assignment

const header = require('./baumann-header.js');

console.log(header.display("Reva", "Baumann", "Assignment 2.4"));

/*
    Expected output:
    building and invoking functions to design complex and scalable solutions

*/


// Create a function fullName for first and last name
function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}


// Create a variable that calls the function fullName and assigns first 
// and last name values
var name = fullName("Reva", "Baumann");


// Create a function dateWriter with month, day and year, adding a comma after day
function dateWriter (year, month, day) {
    return month + " " + day + ", " + year;
}


// Create a variable that call function dateWrite and assigns today's date
var today = dateWriter("2019", "February", "16");

// Create a function to output the temperature sets with number to a fixed number of positions provided by the variable
function formatNumber (number, numOfFixedPositions)
{
    return number.toFixed(numOfFixedPositions);
}

// Creates a variable temperature that calls formatNumber and assigns today's temperature with a fixed position of 1
var temperature = formatNumber(17.0,1);

// Create function convertToInt and parses the received string value to an integer
function convertToInt (intString) {
    return parseInt(intString);
}

// Create a variable age that calls convertToInt and assigns a string value of my actual age
var age = convertToInt("27");

// Create function convertToFloat and parses the provided string to float
function convertToFloat (floatString) {
    return parseFloat(floatString);
}

// Create a variable savings that calls convertToFloat and assigns a string value of my actual goal of savings
var savings = convertToFloat("100000000");

// Create page break
console.log("")


// Output of expected results of program
console.log("Hello my name is " + name + "!");

// Create page break
console.log("")

console.log("Today's date is " + today + " and the current temperature is " + temperature + " degress.");

// Create page break
console.log("")

console.log("I am " + age +" years old and my savings goal is " + savings + " dollars.");

//end program