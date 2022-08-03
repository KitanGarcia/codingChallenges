/* Leetcode 213
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
 */

var rob = function (nums) {
  // get max of maxes
  let globalMax = 0;
  let currentMax = 0;
  let memo = {};

  /*
  Pick house. or move to next house
    [1     2      3     1]
                                                 0,0
                                        2,1               1,0
                                
  */

  // keep track of max in recursive function
  function findMaxes(startIncluded, index, max) {
    if (memo[`${startIncluded}_${index}_${max}`]) {
      return memo[`${startIncluded}_${index}_${max}`];
    }

    if (index > nums.length - 1) {
      memo[`${startIncluded}_${index}_${max}`] = max;
      return max;
    }
    if (
      (index === nums.length - 1 && !startIncluded) ||
      (index === nums.length - 1 && startIncluded && nums.length === 1)
    ) {
      memo[`${startIncluded}_${index}_${max}`] = max + nums[index];
      return max + nums[index];
    }

    if (index === nums.length - 1 && startIncluded) {
      memo[`${startIncluded}_${index}_${max}`] = max;
      return max;
    }

    return Math.max(
      findMaxes(startIncluded, index + 2, max + nums[index]),
      findMaxes(startIncluded, index + 1, max)
    );
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      currentMax = findMaxes(true, i, 0);
    } else {
      currentMax = findMaxes(false, i, 0);
    }

    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
};

console.log(rob([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])); // should be 16
console.log(rob([1])); // should be 1
console.log(rob([2, 3, 2])); // should be 3
console.log(rob([1, 2, 3, 1])); // should be 4
console.log(rob([1, 2, 3])); // should be 3
