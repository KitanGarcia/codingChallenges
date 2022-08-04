/*
Leetcode 20
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

const isValid = (str) => {
  if (str.length % 2 !== 0) {
    return false;
  }

  let dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];
  for (let char of str) {
    if (dict.hasOwnProperty(char) && stack[stack.length - 1] === dict[char]) {
      stack.pop();
    } else stack.push(char);
  }
  return !stack.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{]})"));
console.log(isValid("({})"));
