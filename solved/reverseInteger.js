/*
leetcode 7
  
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Input: x = 123
Output: 321
  
Input: x = -123
Output: -321

Input: x = 120
Output: 21
  
Input: x = 0
Output: 0
*/

function reverse(x) {
  let reversed = Math.abs(x).toString().split("").reverse().join("");
  if (reversed > 2**31) {
    return 0;
  }
  reversed = reversed * Math.sign(x);
  
  return reversed;
}
