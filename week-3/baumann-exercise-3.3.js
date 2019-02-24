/*
============================================
; Title: baumann-exercise-3.3.js
; Author: Reva Baumann 
; Date:   24 February 2019
; Modified By: Reva Baumann
; Description: Replace a series of if...else statements with a switch block.
;===========================================
*/

/*
    Expected output:
    FirstName LastName
    Exercise 3.3
    Today's Date

    // Replacing the series of if...else statements with a switch block
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 3.3"));

// Declares a variable and assigns a value of 13
var eventKeyCode = 13 

// Create a switch statement to test the value of the eventKeyCode variable.
switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The spacebar key was pressed");
        break;
    case 8:
        console.log("The backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press");
        break;

}

// end program