/*
=============================================
; Title:  donner-assignment-4.1.js
; Author: Adam Donner
; Date:   27 February 2019
; Modified by: Reva Baumann
; Description: Creates an array and outputs
; the even number only.
;============================================
*/


// start program

/*
Expected output:
  Adam Donner
  Exercise 4.1
  Todays Date

  The even numbers are:
  2,4,6,8,10,12,114,16,18,20

*/



console.log("")  // This creates a linebreak between our header and the displayed values in assigned in the array.

//This declares a variable and assigns an array of numbers to the variable.
var someNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//Creates a function which checks for even numbers.  It keeps the even numbers while discarding the odd numbers.
function numberSort(arr) {
    if( arr.length === 1 )   //added ; after if
        return arr[0] % 2 ? [] : arr.slice();
    return numberSort(arr.slice(0,1)).concat(numberSort(arr.slice(1)));  //should be arr.slice not arr,slice
}

//This creates a variable which will accept the even numbers from the array and convert it to a string for output.
var evensOnly = numberSort(someNumbers).toString();

console.log("The even numbers are:")
console.log(evensOnly)

//end program



