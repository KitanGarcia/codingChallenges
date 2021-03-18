/*
 * https://leetcode.com/problems/find-the-duplicate-number/
 *
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

Example 1: 
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3: 
Input: nums = [1,1]
Output: 1

Example 4:
Input: nums = [1,1,2]
Output: 1
 */

//Time Complexity: O(n)
//Space Complexity: O(n)
var findDuplicateSet = function(nums) {
  let set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    }
    
    else {
      set.add(nums[i]);
    }
  }
  
  return 0;
    
};

//Time Complexity: O(nlog(n))
//Space Complexity: O(1)
var findDuplicateSort = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  nums.sort();  
  let pointer = 1;
  let lag = 0;
  
  while (pointer < nums.length) {
    if (nums[pointer] === nums[lag]) {
      return nums[pointer];
    }
    pointer++;
    lag++;
  }
  
  return 0;
};


//Time Complexity: O(n)
//Space Complexity: O(1)
var findDuplicateBest = function(nums) {
  let slow = nums[0];
  let fast = nums[0];
  
  //Treat it as linked list cycle. Find intersection point
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    
    if (fast === slow) {
      break
    }
  }
  
  slow = nums[0];
  
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  
  return fast;
};
