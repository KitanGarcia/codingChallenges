/*
 * Leetcode 238
    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    You must write an algorithm that runs in O(n) time and without using the division operation.

     

    Example 1:

    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]
    Example 2:

    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]
 */

var productExceptSelf = function (nums) {
  let left = [];
  let right = [];
  let leftMult = 1;
  let rightMult = 1;

  // Find cumulative product going from left to right
  for (let l = 0; l < nums.length; l++) {
    left[l] = leftMult;
    leftMult *= nums[l];
  }

  // Find cumulative product going from right to left
  for (let r = nums.length - 1; r >= 0; r--) {
    right[r] = rightMult;
    rightMult *= nums[r];
  }

  for (let i = 0; i < left.length; i++) {
    left[i] = left[i] * right[i];
  }

  return left;
};
