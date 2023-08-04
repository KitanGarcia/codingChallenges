/*
 * Given an array, rotate the array to the right by k steps, where k is nonnegative
 *
 * Input:
 * [1,2,3,4,5,6,7]
 * 3
 *
 * Output:
 * [5,6,7,1,2,3,4]
 *
 *
 * Input:
 * [-1,-100,3,99]
 * 2
 *
 * Output:
 * [3,99,-1,-100]
 */

/*
   1   2   3   4   5   6   7

   Reverse full array
   7   6   5   4   3   2   1 

   Reverse from 0 to k
   5   6   7   4   3   2   1

   Reverse from k + 1 to end
   5   6   7   1   2   3   4
 */
const rotateArrayInPlace = (nums, k) => {
  k = k % nums.length;
  let l = 0;
  let r = nums.length - 1;

  const reverseArr = (nums, l, r) => {
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }

    return nums;
  };

  // reverse full given array
  // from [1,2,3,4,5,6,7] to [7,6,5,4,3,2,1]
  nums = reverseArr(nums, l, r);

  // reverse part from 0 to k - 1;
  // from [7,6,5,4,3,2,1] to [5,6,7,4,3,2,1]
  l = 0;
  r = k - 1;
  nums = reverseArr(nums, l, r);

  // reverse part from k to the end;
  // from [5,6,7,4,3,2,1] to [5,6,7,1,2,3,4]
  l = k;
  r = nums.length - 1;
  nums = reverseArr(nums, l, r);
};

function rotateArray(nums, k) {
  let ending = [];
  for (let i = k; i > 0; i--) {
    if (nums[nums.length - i]) {
      ending.push(nums[nums.length - i]);
    }
  }
  console.log(ending);

  for (let i = nums.length - 1 - k; i >= 0; i--) {
    console.log("HI");
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < ending.length; i++) {
    nums[i] = ending[i];
  }
  return nums;
}

//SIMPLER
function rotateArray2(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([-1], 2));
console.log(rotateArray([1, 2], 3));

console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray2([-1], 2));
console.log(rotateArray2([1, 2], 3));
