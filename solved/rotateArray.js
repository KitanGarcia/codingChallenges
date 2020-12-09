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

function rotateArray(nums, k) {
  let ending = [];
  for (let i = k; i > 0; i--) {
    if (nums[(nums.length) - i]) {
      ending.push(nums[(nums.length) - i]);
    }
  }
  console.log(ending);

  for (let i = (nums.length - 1) - k; i >= 0; i--) {
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

console.log(rotateArray([1,2,3,4,5,6,7], 3));
console.log(rotateArray([-1], 2));
console.log(rotateArray([1, 2], 3));

console.log(rotateArray2([1,2,3,4,5,6,7], 3));
console.log(rotateArray2([-1], 2));
console.log(rotateArray2([1, 2], 3));
