/*
=============================================
; Title: donner-discussion-fixed-5.1.js
; Author: Adam Donner
; Date: 06 March 2019
; Modified by: Reva Baumann
; Description: Creates a simple program
; which uses .forEach and will have 2 errors.
;============================================



// start program


Expected output:
  Adam Donner
  Discussion 5.1
  Todays Date

  They have invaded!!
  -------------------
  G H
  R U
  E M
  E A
  T N
  I S
  N
  G
  S

*/



// This creates an array like object assigning values to g1 and g2.
 var greetings =[
   {g1: "G",g2: "H"},
   {g1: "R",g2: "U"},
   {g1: "E",g2: "M"},
   {g1: "E",g2: "A"},
   {g1: "T",g2: "N"},
   {g1: "I",g2: "S"},
   {g1: "N",g2: " "}, // added " " after g2: to execute program
   {g1: "G",g2: " "}, // added " " after g2: to execute program
   {g1: "S",g2: " "}] // added " " after g2: to execute program

console.log("They have invaded!!");
console.log("-------------------");
 greetings.forEach(function(greetings){console.log(greetings.g1 + " " + greetings.g2)});  // Replace the comma in greetings,g2 with a period

//end program
