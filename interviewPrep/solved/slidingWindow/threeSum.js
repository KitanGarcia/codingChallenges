/*
  Leetcode 15
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  Notice that the solution set must not contain duplicate triplets.

   

  Example 1:

  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Explanation: 
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  The distinct triplets are [-1,0,1] and [-1,-1,2].
  Notice that the order of the output and the order of the triplets does not matter.
  Example 2:

  Input: nums = [0,1,1]
  Output: []
  Explanation: The only possible triplet does not sum up to 0.
  Example 3:

  Input: nums = [0,0,0]
  Output: [[0,0,0]]
  Explanation: The only possible triplet sums up to 0.
 */

/*
 We see that algorithm will take at least O(n^2).
 This means we can sort without worrying about runtime
 Sorting will help us ignore duplicates and compare values
 -1,0,1,2,-1,-4
 becomes
 -4, -1, -1, 0 , 1, 2

target is 0
  -4   -1   -1   0   1   2
  i     j                k        sum = -3 (which is below 0); j++
  i          j           k        sum = -3 (which is below 0); j++
  i              j       k        sum = -2 (which is below 0); j++
  i                  j   k        sum = -1 (which is below 0); j reached k so i++
        i    j           k        sum = 0 (which is target); store as result; k--
        i    j       k            sum = -1 (which is below 0); j++
        i        j   k            sum = 0 (which is target 0); store as result; k can-t decrease so i++
             i   j   k            sum = 0 (which is target); but values already used.
 */
const threeSum = function (nums) {
  let triplets = [];
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicate values for i
    }

    let j = i + 1;
    let k = nums.length - 1;
    let target = 0 - nums[i];

    while (j < k) {
      let sum = nums[j] + nums[k];

      if (sum === target) {
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        // Skip duplicate values for j
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        // Skip duplicate values for k
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0, 0]));
