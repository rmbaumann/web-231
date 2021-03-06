/*
=============================================
; Title: baumann-discussion-6.1.js
; Author: Reva Baumann
; Date: 12 March 2019
; Modified by: Reva Baumann
; Description: Creates a program using object
; properties with two (2) errors.
;============================================
*/


// start program

/*
Expected output:
  Reva Baumann FIXED
  Discussion Board 6.1
  12 March 2019

  Displays the name of Wonder Woman by dot notation and bracket notation:
  Full name by dot notation: Diana Prince
  Full name by bracket notation: Diana Prince
  
*/



// An object literal

const person = {
    firstName: "Diana,
    lastName: "Prince
}


// Outputs objects above into a full name
console.log('Full name by dot notation: ' + person.firstName + ' ' + person.lastName)
console.log('Full name by bracket notation: ' + person["firstName"] + ' ' + person["lastName"])

// end program
