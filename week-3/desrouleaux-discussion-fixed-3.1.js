/*
============================================
; Title: Discussion-board-3.1.js
; Author: Lance Desrouleaux
; Date: 20 February 2019
; Modified by: Reva Baumann
; Description: Create a simple JavaScript program using either a for, while, if, or switch statement with at least two errors
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Discussion 3.1"));
console.log('');


//Function to return a random number between to set min and max numbers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Declare a variable wkeyWord and giving it a value determined by the random integer generator
keyWord = getRandomInt(1,6);

console.log("You rolled the dice and your random number is..... " + keyWord);

//Switch statement that use keyWord to print a statement notifying the user of what number they rolled .
switch (keyWord){
  case 1:
  console.log( " You have rolled ONE " );
  break;

  case 2:
  console.log(" You have rolled TWO");
  break;

  case 3:
  console.log(" You have rolled THREE");
  break;

  case 4:
  console.log(" You have rolled FOUR");
  break;

  case 5:
  console.log(" You have rolled FIVE");
  break;

  case 6:
  console.log(" You have rolled SIX")
  break;

  default:
  console.log( "Please roll again!");
}