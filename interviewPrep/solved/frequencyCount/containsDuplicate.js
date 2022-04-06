/*
 * Leetcode 217
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

var containsDuplicate = function (nums) {
  let set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
