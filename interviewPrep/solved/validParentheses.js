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

// Another solution - easier to picture, but less elegant
const isValid2 = (brackets) => {
  let stack = [];

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(" || brackets[i] === "[" || brackets[i] === "{") {
      stack.push(brackets[i]);
    } else {
      const last = stack[stack.length - 1];
      if (brackets[i] === ")") {
        if (last !== "(") {
          return false;
        }
      }
      if (brackets[i] === "]") {
        if (last !== "[") {
          return false;
        }
      }
      if (brackets[i] === "}") {
        if (last !== "{") {
          return false;
        }
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{]})"));
console.log(isValid("({})"));
