/*
=============================================
; Title: baumann-add-content.js
; Author: Reva Baumann
; Date: 11 March 2019
; Modified by: Reva Baumann
; Description: Create a practice program
;============================================
*/


// start program

/*
Expected output:
  Reva Baumann
  add-content.js
  11 March 2019
  
*/

// start program

var today = new Date ();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>')
