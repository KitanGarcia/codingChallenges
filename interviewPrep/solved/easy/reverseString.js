/*
 * Leetcode 344
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 */

function reverseString(s) {
  // find midpoint index of string
  let midpoint = Math.ceil((s.length - 1) / 2);
  let end = s.length - 1;
  let temp;

  // loop through string to midpoint swapping chars
  for (let i = 0; i < midpoint; i++) {
    temp = s[i];
    s[i] = s[end - i];
    s[end - i] = temp;
  }

  return s;
}

console.log(reverseString(["h"]));
console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
