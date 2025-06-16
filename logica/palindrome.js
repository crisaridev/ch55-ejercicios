// Write a program that prompts for a word or sentence
// (it can be capitalized, have spaces and puntuation).
// Figure out if the sentence / word is a palindrome or not.
// Ignoring punctuation, spaces and capitalized letters.

//
const palindrome = () => {
  //Ask a user the word
  const word = "Hello"
  //prompt(`Enter the amount of seconds needed: `);

  //Set a timeout according the seconds received
  const wordWithoutPunctuation = word.replace(/[.,?!:;'"—_()\[\]…\- ]/g, "");
  for (let index = 0; index < wordWithoutPunctuation.length; index++) {
    console.log(wordWithoutPunctuation.length);
  }
};

palindrome();