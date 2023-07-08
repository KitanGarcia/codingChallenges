/*
  Leetcode 227
  Given a string s which represents an expression, evaluate this expression and return its value. 

  The integer division should truncate toward zero.

  You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

  Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

  Example 1:

  Input: s = "3+2*2"
  Output: 7
  Example 2:

  Input: s = " 3/2 "
  Output: 1
  Example 3:

  Input: s = " 3+5 / 2 "
  Output: 5
 */

var calculate = function (s) {
  let currentNumber = "";
  let symbol = "+";
  let currentChar = "";

  s = s.replace(/\s+/g, "");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    currentChar = s[i];
    if (!isNaN(currentChar)) {
      currentNumber += currentChar;
    }
    if (isNaN(currentChar) || i === s.length - 1) {
      console.log("stack", stack);
      console.log("current number", currentNumber);
      if (symbol == "-") {
        stack.push(-parseInt(currentNumber));
      } else if (symbol == "+") {
        stack.push(parseInt(currentNumber));
      } else if (symbol == "*") {
        stack.push(stack.pop() * parseInt(currentNumber));
      } else if (symbol == "/") {
        stack.push(Math.floor(stack.pop() / parseInt(currentNumber)));
      }
      symbol = s[i];
      currentNumber = "";
    }
  }

  let result = 0;
  while (stack.length > 0) {
    result += stack.pop();
  }
  return result;
};
