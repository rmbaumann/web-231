/*
============================================
; Title: desrouleaux-discussion-4.1.js
; Author: Lance Desrouleaux
; Date: 27 February 2019
; Modified by: Reva Baumann
; Description: create a simple JavaScript program using an array with at least two (2) errors
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "discussion 4.1"));

//Start Program

console.log(''); // moved below Start Program

//Here I am declaring a new array that has three String values
myArray = ['Netflix','Hulu','Prime']; // Added = between myArray and what you declared

//Here I am sorting the array in alphabetical order
myArray = myArray.sort();

// Here I will make a string out of all the values in the array
newArray = myArray.join(" "); // Erased .forEach

// Here I will print the string to the screen.
console.log(newArray);


//end program