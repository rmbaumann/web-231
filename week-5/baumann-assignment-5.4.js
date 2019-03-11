/*
=============================================
; Title: baumann-assignment-5.4.js
; Author: Reva Baumann
; Date: 10 March 2019
; Modified by: Reva Baumann
; Description: Create a query using composers that
; lists rating, genre, etc.
;============================================
*/

/*
Expected output:
  Reva Baumann
  Assignment 5.4
  10 March 2019

--COMPOSER BY RATING-- 
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart
 
 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 --COMPOSER BY GENRE-- 
 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Schubert
  
*/

// start program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 5.4"));

// Creates list of composers using an array and assigning values
var composers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Classical",
        rating: 8
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
        rating: 9
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

// Declare an array using the maps() function 
var ratings = composers.map(function(composer){
    let rating = [composer.rating, composer.lastName];
    return rating;
});

// Sort the arrays in descending order
ratings.sort(function(a,b){return b-a});

// Sort the arrays by Rating
console.log(' --COMPOSER BY RATING-- ')
ratings.forEach(function(rating){
    console.log(' Rating: ' + rating[0]);
    console.log(' Composer: ' + rating[1]);
    console.log( ' ' );
});

// Sort the arrays by Genres
var genre = composers.map(function(composer){
    let genres = [composer.genre, composer.lastName];
    return genres
});

// Sort the array by genre name
genre.sort();


// Outputs the value of composers using .forEach
console.log(' --COMPOSER BY GENRE-- ')
genre.forEach(function(genre){
    console.log(' Genre: ' + genre[0]);
    console.log(' Composer: ' + genre[1]);
    console.log( ' ');
})

// end program

