/*
=============================================
; Title: baumann-exercise-6.2.js
; Author: Reva Baumann
; Date: 17 March 2019
; Modified by: 
; Description: Exception handling program that plans for 
; and handles runtime errors. 
;============================================
*/


// start program

/*
Expected output:
  Reva Baumann 
  Exercise 6.2
  17 March 2019

  Catch clause: The difference between 10 and 15 is a negative number
  Finally clause reached...
  
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 6.2"));

//start program

// List integers here and test the difference
try {
    var num1 = 10;
    var num2 = 15;
    var difference = num1 - num2;
    var checkNum = Math.sign(difference);
    if (checkNum = -1) throw "The difference between " + num1 + " and " + num2 + " is a negative number."; // Lists integer amounts and states it is a negative number
    console.log(difference);
} catch (err) { 
    console.log("Catch clause: " + err);
} finally {
    console.log("Finally clause reached ..."); // Resulting messsage
    }

// end program