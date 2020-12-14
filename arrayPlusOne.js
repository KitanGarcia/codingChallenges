/*
 * COMMON IN GOOGLE
 * Given a positive integer represented by an array of digits, add one to that number
 *
 * Input: [1,2,3]  =>	Output: [1,2,4]
 * Input: [1, 9]	=>	Output: [2,0]
 * Input: [9,9,9]  =>  Output: [1,0,0,0]
 *
 * Constraints:
 *   Time Complexity: O(N)
 *   Auxiliary Space Complexity: O(1)
 */

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i]++;
    }
    if (digits[i] >= 10) {
      digits[i] = digits[i] % 10;
      if (i === 0) {
        digits.unshift(1);
      }
      else {
        digits[i - 1]++;
      }
    }
  }
  return digits;
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([1, 9, 9, 9]));
console.log(plusOne([1, 9, 8, 9]));
console.log(plusOne([9, 9, 9, 9]));
console.log(plusOne([1, 9, 8, 9, 5, 6, 9]));
