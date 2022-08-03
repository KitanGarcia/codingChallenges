/*
 * Leetcode 520
 *We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
*/

var detectCapitalUse = function (word) {
  // count capitals
  let capitals = 0;
  let isFirstCapital = false;

  // loop through string and count capitals
  for (let i = 0; i < word.length; i++) {
    // char is capital
    if (65 <= word[i].charCodeAt() && word[i].charCodeAt() <= 90) {
      capitals++;
      if (i === 0) {
        isFirstCapital = true;
      }
    }
  }

  // there are no capitals
  if (word && capitals === 0) {
    return true;
  }

  // all letters are captials
  if (capitals === word.length) {
    return true;
  }

  // first char is capital and rest are not
  if (isFirstCapital && capitals === 1) {
    return true;
  }

  return false;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("Google"));
