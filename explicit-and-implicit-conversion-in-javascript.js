/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean(""); // "false" is not falsy but "" is.
if (Boolean(isValid)) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // This converts age to a number so that 5 can be added to it.
console.log("Total Age: " + totalAge);


//Explicit
let balance = 10129;
console.log("User has funds (T/F): " + Boolean(balance));


//Implicit
let ssnBeginning = 12345;
let ssnLastFour = 6789;
console.log("SSN: " + ssnBeginning + ssnLastFour);