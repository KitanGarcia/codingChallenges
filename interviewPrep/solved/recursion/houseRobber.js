/*
 * Leetcode 198
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

const robRecursive = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  const helper = (index, sum) => {
    if (index === nums.length - 1) {
      return sum + nums[index];
    }
    if (index > nums.length - 1) {
      return sum;
    }
    return Math.max(
      helper(index + 2, sum + nums[index]),
      helper(index + 1, sum)
    );
  };
  return helper(0, 0);
};

const robBest = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let prev1 = 0;
  let prev2 = 0;
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp = prev1;
    prev1 = Math.max(prev2 + nums[i], prev1);
    prev2 = temp;
  }
  return prev1;
};

const robDPArray = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let table = new Array(nums.length + 1);
  table[0] = 0; // 0 profit robbing 0 houses
  table[1] = nums[0]; // the most we can get is what the first house has

  for (let i = 1; i < nums.length; i++) {
    table[i + 1] = Math.max(table[i], table[i - 1] + nums[i]);
  }
  return table[nums.length];
};

const rob = (nums) => {
  let table = new Array(nums.length + 1).fill(-1);

  function helper(index) {
    if (index < 0) {
      return 0;
    }

    // Check greater than 0 since all values are nonnegative
    // and we initialized them to negative
    if (table[index] >= 0) {
      return table[index];
    }

    table[index] = Math.max(helper(index - 2) + nums[index], helper(index - 1));
    return table[index];
  }
  return helper(nums.length - 1);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));

console.log(robRecursive([1, 2, 3, 1]));
console.log(robRecursive([2, 7, 9, 3, 1]));

console.log(robDPArray([1, 2, 3, 1]));
console.log(robDPArray([2, 7, 9, 3, 1]));

console.log(robBest([1, 2, 3, 1]));
console.log(robBest([2, 7, 9, 3, 1]));
