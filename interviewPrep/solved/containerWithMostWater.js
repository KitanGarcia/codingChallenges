/*
 * Leetcode 11
 *You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

const containerWithMostWater = (heights) => {
  let left = 0;
  let right = heights.length - 1;

  let lowerHeight = 0;
  let amount = 0;

  while (left < right) {
    lowerHeight = Math.min(heights[left], heights[right]);
    amount = Math.max(amount, lowerHeight * (right - left));

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return amount;
};

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // out: 49

const height2 = [1, 1]; // out: 1

const height3 = [2, 3, 4, 5, 18, 17, 6]; // out: 17

console.log(containerWithMostWater(height1));
console.log("========================");
console.log(containerWithMostWater(height2));
console.log("========================");
console.log(containerWithMostWater(height3));
