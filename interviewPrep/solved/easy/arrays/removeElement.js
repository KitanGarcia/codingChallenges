/*
LeetCode 27
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
 */

const fasterRemove = (nums, val) => {
  let k = 0; // initialize the index of the next valid element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // if the current element is not equal to val
      nums[k] = nums[i]; // copy the current element to the next valid position
      k++; // increment the index of the next valid position
    }
  }
  return k;
};

const removeElement = (nums, val) => {
  nums.sort();

  let startIndex = null;
  let endIndex = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val && startIndex === null) {
      startIndex = i;
    }
    if (nums[i] === val && startIndex !== null) {
      endIndex = i;
    }
  }

  if (startIndex === null || endIndex === null) {
    return nums;
  }

  let deleteCount = endIndex - startIndex + 1;
  nums.splice(startIndex, deleteCount);
  return nums.length > 0 ? nums.length : [];
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([2], 3)); // [2]
console.log(removeElement([1], 1)); // []
console.log(removeElement([3, 3], 5)); // [3, 3]
