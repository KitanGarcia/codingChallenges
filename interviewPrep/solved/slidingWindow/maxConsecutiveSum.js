/*
Given an array of integers, find the sum of consecutive values in the array that produces the maximum value

Input: unsorted array of positive and negative integers
Output: integer (max consecutive sum)

Example:
  Input = [6, -1, 3, 5, -10]
  Output = 13 (6 + -1 + 3 + 5)
*/

/*
 -2   1   -3   4   1
 L    R                      -1; found positive
      LR                      1
      L    R                  -2
      L        R              4: if current > sum && sum < 0, move left to current
               L   R          5          

*/
const maxSubArrayEasyToUnderstand = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  let max = nums[0];
  let sum = nums[0];
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    current = nums[right];

    // Current is larger than the sum and the sum is neative
    if (current > sum && sum < 0) {
      left = right;
      sum = nums[left];
    } else {
      sum = sum + current;
    }
    max = Math.max(max, sum);
    right++;
  }
  return max;
};

/*
  6   -1   3   5   -10
 LR
 L     R                        Store 6 as max
 L         R                    Store 8 as max
 L             R                Store 13 as max
 L                   R          R end: Move up L, move back R
      LR                        Store -1 as sum
      L    R                    Store 2 as sum
      L        R                Store 7 as sum
      L              R          R end: Move up L, move back R
           LR                   Store 3 as sum

 */

const maxConsecutiveSumEasier = (array) => {
  let max = -Infinity;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (left < array.length) {
    sum += array[right];
    right++;

    if (max < sum) {
      max = sum;
    }

    if (right >= array.length) {
      left++;
      right = left;
      sum = 0;
    }
  }
  return max;
};

/*
     l represents local max
     u represents ultimate max
     6   -1   3   5   -10
   l[6,   5,  8, 
   u[6,   6

   u[6,   6,  8

   l[6,   5,  8, 13,   3
   u[6,   6,  8
   u[6,   6,  8, 13
   u[6,   6,  8, 13,  13



     6   -10  3   5   -10
   l[6,  -4,  3
   u[6,   6

   u[6,   6, 6

   l[6,  -4,  3   8   -2
   u[6,   6,  6,  8,   8
 */

function maxConsecutiveSum(array) {
  let local = array[0];
  let ultimate = array[0];

  for (let i = 1; i < array.length; i++) {
    local = Math.max(local + array[i], array[i]);
    ultimate = Math.max(local, ultimate);
  }
  return ultimate ? ultimate : 0; //if ultimate is not defined, return 0
}

let test1 = [6, -1, 3, 5, -10];
console.log(maxConsecutiveSum(test1));

/*
 *                                         0
 *                  6                                             0
 *        5                  -1                       -1                    3
 *   8        3        2            5          2             5
 */

function maxSumRecursive(arr) {
  let max = -Infinity;
  function helper(index, sum) {
    if (index >= arr.length) {
      return;
    }
    if (max < sum) {
      max = sum;
    }

    //take or move on

    //take current index
    let addCurrent = helper(index + 1, sum + arr[index]);

    //move on
    let moveOn = helper(index + 1, 0);
  }
  helper(0, 0);
  return max;
}
