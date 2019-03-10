/*
=============================================
; Title: baumann-assignment-5.3.js
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
  Exercise 5.3
  09 March 2019

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
  
*/

// start program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercies 5.3"));

// Creates list of composers using an array and assigning values
var composers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Classical",
        ratings: 8
    },
    {
        firstName: "Wolfgang Anadeus",
        lastName: "Mozart",
        genre: "Classical",
        rating:10
    },
    {
        firstName: "Johann Sebastian",
        lastName: "Bach",
        genre: "Classical",
        ratings: 9
    },
    {
        firstName: "Joseph",
        lastName: "Haydn",
        genre: "Classical",
        rating: 6
    },
    {
        firstName: "Franz",
        lastName: "Schubert",
        genre: "Classical",
        rating: 5
    }
];

// Outputs the value of composers using .forEach
composers.forEach(function(composer){
    console.log(
        "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    )
});

// end program

