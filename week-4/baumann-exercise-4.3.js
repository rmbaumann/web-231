/*
=============================================
; Title: baumann-exercise-4.3.js
; Author: Reva Baumann
; Date: 03 March 2019
; Modified by: Reva Baumann
; Description: Creates an array and outputs
; the values using a function.
;============================================
*/


// start program

/*
Expected output:
  Reva Baumann
  Exercise 4.3
  Todays Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus


*/

// start program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 4.3"));

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// Create a function that iterates the array and use if to show the contents of the array
function getValue(arr, val) {
    for (var k=0; k < arr.length; k++) {
      if (arr[k] === val)
        console.log(arr[k]);
    }
}

console.log("-- DISPLAYING ARRAY ITEMS --"); // Outputs the string to the console.log

for (var x = 0; x < vehicles.length; x++) { // Create a for loop which displays the values of the array
    console.log(vehicles[x]);
}

console.log("-- SELECTED VALUE --"); // Outputs the string to the console.log.

// Use the function to perform a search for text, outputs to the console.log
getValue(vehicles, "Motorcycle"); // Use the function to perform a search for text, outputs to the console.log

console.log("-- SELECTED VALUE --"); // Output the string to the console.log

// Use the function to perform a search for text, outputs to the console.log
getValue(vehicles, "Bus");

// end program
