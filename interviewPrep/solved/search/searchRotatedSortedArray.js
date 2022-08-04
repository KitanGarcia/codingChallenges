/*
Leetcode 33
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 */

const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  // find pivot
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] < nums[end]) {
      end = mid;
    } else if (nums[mid] > nums[end]) {
      start = mid + 1;
    }
  }
  let pivot = end;

  const binarySearch = (start, end) => {
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      }
    }
    return -1;
  };

  if (nums[pivot] === target) {
    return pivot;
  }

  let search1 = binarySearch(0, pivot);
  let search2 = binarySearch(pivot, nums.length - 1);

  // perform Binary Search on both halves of array.
  return search1 !== -1 ? search1 : search2;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1, 3], 3));
