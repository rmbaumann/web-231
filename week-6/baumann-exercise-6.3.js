/*
=============================================
; Title: baumann-exercise-6.3.js
; Author: Reva Baumann
; Date: 17 March 2019
; Modified by: 
; Description: Object Literal used for a ticketing
; system with id, name, and requestor
;============================================
*/


// start program

/*
Expected output:
  Reva Baumann 
  Exercise 6.3
  17 March 2019

  {id: 1, name: Diana Prince, requestor: Bruce Wayne}
  
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 6.3"));

//start program

const support = {
    id: "1",
    name: "Diana Prince",
    requestor: "Bruce Wayne"
}

// Output console.log in the fields into a single string
console.log('{id: ' + support.id + ', name: ' + support.name + ", requestor: " + support.requestor + "}")

//end program