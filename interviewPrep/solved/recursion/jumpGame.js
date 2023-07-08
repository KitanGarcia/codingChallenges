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
