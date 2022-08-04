/*
 * LeetCode 905
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
 */

const sortArrayByParityPointers = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let temp;

  while (left < right) {
    // left is odd; swap with right when right is even
    if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
      temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    } else {
      if (nums[left] % 2 === 0) {
        left++;
      }
      if (nums[right] % 2 !== 0) {
        right--;
      }
    }
  }
  return nums;
};

const sortArrayByParity = function (nums) {
  let evens = [];
  let odds = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }
  return evens.concat(odds);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));

console.log(sortArrayByParityPointers([3, 1, 2, 4]));
console.log(sortArrayByParityPointers([0]));
