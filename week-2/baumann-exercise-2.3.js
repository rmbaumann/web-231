/*
============================================
; Title:  baumann-exercise-2.3.js
; Author: Professor Krasso 
; Date:   16 February 2019
; Modified By: Reva Baumann
; Description: Displays a formatted header
;===========================================
*/

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello Reva Baumann!

*/

// lists details of formatted header, including first name, last name and assignment

const header = require('./baumann-header.js');

console.log(header.display("Reva", "Baumann", "Exercise 2.3"));

//function properties go here
myName.reva = "Reva"; 

//function
function myName() {
    return myName.reva;
}

//output
console.log('\n');
console.log("Hello "  + myName() +  " Baumann!");

// end program
