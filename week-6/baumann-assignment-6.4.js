/*
=============================================
; Title: baumann-assignment-6.4.js
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
  Assignment 6.4
  17 March 2019

  Ticket 4 was created on 3/17/2019 and assigned to employee Bruce Wayne (Millionaire Mogul).
  
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 6.4"));

//start program

// Create a nested object that contains the requestor information and details of the individual
var ticket = {
    id: 4,
    name: 'Diana Prince ',
    dateCreated: new Date().toLocaleDateString('en-US'),
    priority: 'Urgent',

    person: {
        id: 8,
        firstName: 'Bruce',
        lastName: 'Wayne',
        jobTitle: '(Millionaire Mogul)'
    }
}

// Output ticketing number details, date and staff
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' ' + ticket.person.jobTitle + '.');

//end program