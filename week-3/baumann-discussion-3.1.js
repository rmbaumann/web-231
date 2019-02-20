/*
============================================
; Title: baumann-discussion-3.1.js
; Author: Professor Krasso 
; Date:   19 February 2019
; Modified By: Reva Baumann
; Description: Program that uses for, while, if or switch statements with two errors. 
;===========================================
*/

/*
    Expected output:
    FirstName LastName
    Discussion 3.1
    Today's Date
*/

// lists details of formatted header, including first name, last name and assignment

const header = require('./baumann-header.js');

console.log(header.display("Reva", "Baumann", "Discussion 3.1"));

/*
; Expected Output:
; The cat is a feline and lists families of various carnivora that are false.
*/

// start program

var cat = "Felidae";

if (cat == “Canidae”) {
    console.log(“The scientific order Carnivora, possesses Cat, which is under this Family ” + cat + “!”); 
    // else if statement, checking value of cat against string value, false values move to next statement.
 
} else if (choice == ”Ursidae”) { // else if statement, checking value of cat against string value, false values move to next statement.
    console.log(“The scientific order Carnivora, possesses Cat, which is under this Family ” + cat + “!”);

} else if (choice == ”Felidae”) { // else if statement, checking value of cat against string value, false values move to next statement.
    console.log((“The scientific order Carnivora, possesses Cat, which is under this Family ” + cat + “!”));

} else if (choice == ”Mustelidae”) { // else if statement, checking value of cat against string value, false values move to next statement.
    console.log(“The scientific order Carnivora, possesses Cat, which is under this Family ” + cat + “!”);

} else {  // if all values are false, output to console.log 
    console.log(”What are you, a herbivore?”);
}

// end program
