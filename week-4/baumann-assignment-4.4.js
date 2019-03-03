/*
=============================================
; Title: baumann-assignment-4.4.js
; Author: Reva Baumann
; Date: 03 March 2019
; Modified by: Reva Baumann
; Description: Creates an array of 5 states and
; outputs the array in original order, alphabetically
; and value chosen using filter.
;============================================
*/

// start program

/*
Expected output:
  Reva Baumann
  Assignment 4.4
  Todays Date


 -- ORIGINAL ARRAY --
 Nebraska
 Colorado
 Kansas
 Iowa
 South Dakota


 -- SORTED ARRAY --
 Colorado
 Iowa
 Kansas
 Nebraska
 South Dakota


 -- SELECTED VALUE --
 South Dakota

*/

// start program


// Declare Array variables and give elements, original order
var states = ["Nebraska", "Colorado", "Kansas", "Iowa", "South Dakota"];

// Create a variable to for a check using the .filter, selected value
var elementOne = "South Dakota";

// Create a function using if statement based on the passed in variables
function getState(elementOne, elementTwo) {
  if (elementOne === elementTwo)
  return true;
}

// Declare a variable and use filter to call a function, return a 'true' if the value of elementOne matches
const result = states.filter(function (elem) {
  return getState(elementOne, elem);
})[0];

// Output the arry in the original order
console.log("-- ORIGINAL ARRAY --");
states.forEach(function(states) {console.log(states)});
console.log("");

// Output the array in alphabetical order
console.log("-- SORTED ARRAY --");
states.sort().forEach(function(states) {console.log(states)});
console.log("");

// This outputs the selected value result
console.log('-- SELECTED VALUE --');
console.log (result);


//end program
