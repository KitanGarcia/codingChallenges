/*
Leetcode 55
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

/*
  2  3  1  1  4    max = 0
  i                Math.max(max, 2 + 0) = 2
     i             max = Math.max(max, 3 + 1) = 4; 4 >= nums.length - 1 --> true;


  3  2  1  0  4    max = 0
  i                max = Math.max(max, 3 + 0) = 3
     i             max = Math.max(max, 2 + 1) = 3
        i          max = Math.max(max, 1 + 2) = 3
           i       max = Math.max(max, 0 + 3) = 3; max = i and nums[i] = 0 --> false
*/
var canJumpFaster = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i] + i);
    if (max >= nums.length - 1) {
      return true;
    }
    if (max === i && nums[i] === 0) {
      return false;
    }
  }

  return false;
};

var canJump = function (nums) {
  let memo = {};

  const jump = (index) => {
    if (memo.hasOwnProperty(index)) {
      return memo[index];
    }

    let jumpLength = nums[index];
    if (index >= nums.length - 1) {
      memo[index] = true;
      return memo[index];
    }

    for (let i = 1; i <= jumpLength; i++) {
      memo[index] = jump(index + i);
      if (memo[index]) {
        return memo[index];
      }
    }
    memo[index] = false;
    return memo[index];
  };

  return jump(0);
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
