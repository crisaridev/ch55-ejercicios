// Given a number, return the number divided into its halves in an array.


//   Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.

/*
1. User enter a number "n"
2. Divide that number by 2
3. Save each half in an array
4. Then return the array following the next structure  -> `numDiv(10)` should return `[5, 5]`
*/

//Describe the function of the program
alert("This program divide the number into its halves and return it in an array");

//Declarate an initialize an empty array
let halvesArray = [];

//Ask the user for a number
const userNumber = parseInt(prompt("Enter a number: "));
const userNumberHalf = userNumber / 2;

//Save each half into an Array
for (let i = 0; i < 2; i++) {
  halvesArray.push(userNumberHalf);
}
console.log(halvesArray);
