//let input = [3,2,6,5,7,7,10];
let input = [1, 6, -5, 7, 3];
//let sum = 14;
let sum = -2;

/*  
 * [4,2,6,5,7,9,10]
 *
 * 13
 * { 9:
 *  11:
 *   8:
 *   6:
 *   4:
 *   3:
 * }
 *
 * 18
 * {
 * 14
 * 16
 * 12
 * 13
 * 11
 * 9
 * 8
 * }
 *
 *
 * loop again. If input[i] is in set return true
 */

//return true if there are two integers that add to the sum
//
//returns false if there are two of the same to equal a sum. Should be true
function twoSum(input, sum) {
  let set = new Set();
  for (let i = 0; i < input.length; i++) {
    set.add(sum - input[i]);
  }

  for (let i = 0; i < input.length; i++) {
    if (set.has(input[i]) && sum - input[i] !== input[i]) {
      console.log(input[i]);
      return true;
    }
  }
  return false;
}


/*return the index pair of the two elements when summed equal sum and [-1, -1] otherwise
Example
Input: [1, 6, -5, 7, 3], -2      =>	Output: [2,4]
Input: [1, 9, 10], 8			=>	Output: [-1,-1]

    [1, 6, -5, 7, 3]
    sum - input[i]: i
    -2
    {
    -1: 0
    4: 1
    -7: 2
    5: 3
    1: 4
    }
    here -1 - 1 = -2

    10
    {
    9: 0
    4: 1
    5: 2
    3: 3
    7: 4
    }

let input = [4,2,6,5,7,9,10];
let sum = 14;
    {
    10: 0
    12: 1
    8: 2
    9: 3
    7: 4
    5: 5
    4: 6
    }

    [3, 2, 4]
    6
    {
    3: 0
    4: 1
    2: 2
*/
function twoSum2(nums, target) {
  let hash = {};
  let duplicates = -1;
  for (let i = 0; i < nums.length; i++) {
    if (target < 0) {
      hash[target - nums[i]] = i;
    }
    else {
      hash[target - Math.abs(nums[i])] = i;
    }
    if (nums[i] === target / 2) {
      duplicates++;
    }
  }
  console.log(hash);

  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i])) {
      if (target / 2 === nums[i] && duplicates < 1) {
        continue;
      }
      return [i, hash[nums[i]]];
    }
  }
  return [-1, -1];
}

//BEST SOLUTION
function twoSum3(nums, target) {
  let indices = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (indices.hasOwnProperty(difference)) {
      return [indices[difference], i];
    }
    indices[nums[i]] = i;
  }
  return [-1, -1];
}

console.log(twoSum(input, sum));
console.log(twoSum2([-1,-2,-3,-4,-5], -8));
console.log(twoSum3([-1,-2,-3,-4,-5], -8));
