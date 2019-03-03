/*
=============================================
; Title: baumann-exercise-4.2.js
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
  Exercise 4.2
  Todays Date

  Apple, Orange, Banana, Mango, Pear
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 4.2"));

// Declare variables of fruits, assigning functions to them
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"]


// This creates a function to display the array that was declared in var = fruits.
function getFruit(arr) {
  for (var k = 0; k < arr.length; k++) {
      console.log(arr[k]);
  }
}

// Output of getFruit() function
getFruit(fruits);


// end program
