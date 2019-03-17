/*
============================================
; Title: Discussion-board-6.1.js
; Author: Lance Desrouleaux
; Date: 13th March 2019
; Modified By: Reva Baumann
; Description: A program that demonstrates Objects by creating a property management object with properties of different renters
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Discussion 6.1"));
console.log('');

//start program


//Here I create an Object to store renter information.
var propertyManagement = {

renters:
{
  'Renter One':
  {
    firstName: 'Deborah' ,
    lastName: 'Cross',
    social: 089884637,
    "unit number": 5049,
  }, // Missing comma prevented the objects from executing
  'Renter Two':
  {
    firstName: 'Billy',
    lastName: 'Idol',
    social: 071112221,
    'unit number': 7789
  }


}


}


console.log(" Current Renters ");

//Here I run a for..in loop to print out the renters.
  for( renty in propertyManagement.renters){
  console.log(`${renty}: ${propertyManagement.renters[renty].firstName} ${propertyManagement.renters[renty].lastName} Unit Number: ${propertyManagement.renters[renty['unit number']]}` ); // Added a close braces ( ] ) to the end of ['unit number'] that was missing
  }

//end program