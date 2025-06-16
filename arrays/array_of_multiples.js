/*
Array of Multiples


Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.


Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

/*
1. Create function with 2 parameters, first one for number and the second for length (how many multiples will have the array)
2. Create an Array to save the multiples.
3. Use a for to obtain the multiples using the 'length' value for the iterations and the parameter 'number' for multiply it each iteration.
2. It returns an array of the given length containing multiples of the number.
*/

const arrayMultiples = (number, length) =>{
  let multiplesArray = [];
  for (let i= 0; i < length; i++) {
       multiplesArray.push(number*(i+1));
  }
  return multiplesArray;
}

console.log(arrayMultiples(2,10));
console.log(arrayMultiples(17,6));
