/*
=============================================
; Title: baumann-exercise-7.2.js
; Author: Reva Baumann
; Date: 21 March 2019
; Modified by: 
; Description: Create an employee constructor object
; with four (4) parameters. 
;============================================
*/


// start program

/*
Expected output:
  Reva Baumann 
  Exercise 7.2
  21 March 2019

  1. Thomas Edison Software Engineer
  2. Benjamin Franklin Programmer
  3. Nikola Tesla Project Manager
  4. Charles Babbage Product Manager
  5. Alexander Bell Business Analyst
  
*/

// start program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 7.2"));

function employeeIDs(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

// Create four (4) objects with employee's details
const employees = [
    new employeeIDs(1, 'Thomas', 'Edison', 'Software Engineer'),
    new employeeIDs(2, 'Benjamin', 'Franklin', 'Programmer'),
    new employeeIDs(3, 'Nikola', 'Tesla', 'Project Manager'),
    new employeeIDs(4, 'Charles', 'Babbage', 'Product Manager'),
    new employeeIDs(5, 'Alexander', 'Bell', 'Business Analyst'),
];

// Output of objects with employee details
let index = 1
for (let x = 0; x < employees.length; x++) {
    console.log(employees[x].id + ' ' + employees[x].firstName + ' ' + employees[x].lastName + ' ' + employees[x].title)
    index++
}

// End program