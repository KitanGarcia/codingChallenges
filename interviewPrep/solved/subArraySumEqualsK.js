/*
 * Leetcode 560
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
*/

const subarraySumFaster = (nums, k) => {
  if (nums.length === 0) {
    return 0;
  }

  let count = 0;

  let sum = 0; // Running sum
  let hash = { 0: 1 }; // Frequency of sums. Start with 0 occurring once

  /* 3   4   7   2   -3   1   4   2      k = 7
                                         sum = 0; {0: 1};
     ^                                   sum = 3; {3: 1}; diff = 7 - 3 = 4
         ^                               sum = 7; {0: 1, 3: 1, 7: 1}; diff = 7 - 7 = 0; count += 1
             ^                           sum = 14; {0: 1, 3: 1, 7: 1, 14: 1}; diff = 14 - 7 = 7; count += 1
                 ^                       sum = 16; {... 7: 1, 14: 16: 1}; diff = 16 - 7 = 9
                      ^                  sum = 13; {... 14: 1, 16: 1, 13: 1}; diff = 13 - 7 = 6
                          ^              sum = 14; {... 14: 1, 16: 1, 13: 1}; diff = 14 - 7 = 7; count += 1
                              ^          sum = 18; {... 14: 2, 16: 1, 18: 1}; diff = 18 - 7 = 11
                                  ^      sum = 20; {... 14: 2, 16: 1, 20: 1}; diff = 20 - 7 = 13; count += 1
  */

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let difference = sum - k;
    if (hash.hasOwnProperty(difference)) {
      count += hash[difference];
    }
    hash[sum] = (hash[sum] || 0) + 1;
  }

  return count;
};

/*
   1   1   1       k = 2
   LR              sum = 1; L and R are the same. Do not sum
   L   R           sum = 2; count = 1
       L   R       sum = 2; count++

   1   2   3       k = 3
   LR              sum = 1
   L   R           sum = 3; count = 1
   L       R       sum = 4; reached end; move up L; R = L
       LR          sum = 2;
       L   R       sum = 5; reached end; move up L; R = L
           LR      sum = 3; count++
 */
const subarraySum = (nums, k) => {
  if (nums.length === 0) {
    return 0;
  }

  let count = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (left < nums.length) {
    if (left === right) {
      sum += nums[left];
    } else {
      sum += nums[right];
    }

    if (sum === k) {
      count++;
    }

    if (right === nums.length - 1) {
      left++;
      right = left - 1;
      sum = 0;
    }
    right++;
  }

  return count;
};
