/**
 * Write a program that asks for 10 numbers.
 * Using logical operators and any other javascript functions/structures you've seen before,
 * determine and output the highest of those numbers.
 */

/**
 * 1. Ask the user 10 numbers
 * 2. Store those numbers into an Array.
 * 3. Then sort the elements with the sort function.
 * 4. Determine the highest of those numbers choosing the latest element in the array
*/

//Easiest way
const highestNumber = () => {
  let numbersArray = [];
  for (let i = 0; i < 10; i++) {
    numbersArray.push(parseInt(prompt(`Enter the number ${i+1}: `)));
  }
  numbersArray.sort();
  return numbersArray[numbersArray.length-1];
}
console.log(highestNumber());

