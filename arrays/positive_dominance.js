/*
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.


Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

/*
1. Define a function its parameter accept an Array
2. Iterate the Array and with a comparation as Array[i] < 0 count it as negative for this we will use a variable to store it and compare it after.
3. Iterate the Array and with a comparation as Array[i] > 0 count it as poositive for this we will use a variable to store it and compare it after.
4. Compare the allPositiveElements and allNegativeElements using the next criteria.
  Criteria:
    if allPositiveElements > allNegativeElements return a false value
    if allPositiveElements < allNegativeElements return a true value
    if there exist a drawn return is a Draw and display the counts of positives and negatives.
*/

const positiveDom = (array) => {
  let allPositiveElements = 0
  let allNegativeElements = 0
  //Foreach for determine all the count of positives and negatives
  array.forEach(number => {
    if (number < 0) {
      allNegativeElements++;
      console.log(allNegativeElements);
    } else if (number > 0) {
      allPositiveElements++;
      console.log(allNegativeElements);
    }

  });

  if (allPositiveElements > allNegativeElements) {
    return true;
  } else if (allPositiveElements < allNegativeElements) {
      return false;
    } else {
    return `That was a Draw, Total positive numbers: ${allPositiveElements} = Total negative numbers: ${allNegativeElements}`;
    //I set an scenario were could be a Draw because this requirement was missing.
  }
}

console.log(positiveDom([-1, -3, 0, 4, 6767]));