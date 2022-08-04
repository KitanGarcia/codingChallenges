/*
 * Leetcode 125
 *A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

const isPalindrome = function (s) {
  let cleaned = "";

  // convert string to all letters and lowercase
  for (let i = 0; i < s.length; i++) {
    // is a number
    if (48 <= s[i].charCodeAt() && s[i].charCodeAt() <= 57) {
      cleaned += s[i];
    }

    // is a letter
    else if (s[i].toLowerCase() !== s[i].toUpperCase()) {
      cleaned += s[i].toLowerCase();
    }
  }

  // loop with two pointers, comparing for equality
  for (
    let left = 0, right = cleaned.length - 1;
    left < right;
    left++, right--
  ) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
