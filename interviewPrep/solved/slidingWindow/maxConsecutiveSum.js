/*
Given an array of integers, find the sum of consecutive values in the array that produces the maximum value

Input: unsorted array of positive and negative integers
Output: integer (max consecutive sum)

Example:
  Input = [6, -1, 3, 5, -10]
  Output = 13 (6 + -1 + 3 + 5)


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
