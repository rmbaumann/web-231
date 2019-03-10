/*
=============================================
; Title: baumann-assignment-5.2.js
; Author: Reva Baumann
; Date: 05 March 2019
; Modified by: Reva Baumann
; Description: Creates a program using keyed
; collection array with two (2) errors.
;============================================
*/

/*
Expected output:
  Reva Baumann
  Assignment 5.2
  09 March 2019

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
  
*/

// start program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 5.2"));

// Create a variable and assigns an array of varying food types
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

// .forEach to output the foods variable
foods.forEach(function(food) {
    console.log(food);
});

// End Program