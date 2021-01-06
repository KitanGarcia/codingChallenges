/*
 * Given an array of integers values of 0, 1, and 2 (representing Red, White, and Blue), sort them in linear time.
 *
 * Input: Array of Integers where elements values belong to the set S : { 0, 1, 2 }
 * Output: Sorted Array
 *
 * Sort in place
 * Try to come up with a one pass algorithm using O(1) space.
 *   i
 *   z         t
 *  [2,0,2,1,1,0]
 *
 *   i
 *   z       t  
 *  [0,0,2,1,1,2]
 *
 *     i
 *     z     t  
 *  [0,0,2,1,1,2]
 *
 *       i
 *       z   t  
 *  [0,0,2,1,1,2]
 *
 *     i  
 *       z t    
 *  [0,0,1,1,2,2]
 */

function sortColors(nums) {
  let zeroIndex = 0;
  let twoIndex = nums.length - 1;

  for (let i = 0; i <= twoIndex; i++) {
    if (nums[i] === 0) {
      //swap i and zeroIndex
      [ nums[i], nums[zeroIndex] ] = [ nums[zeroIndex], nums[i] ];
      zeroIndex++;
    }
    else if (nums[i] === 2) {
      //swap i and twoIndex
      [ nums[i], nums[twoIndex] ] = [ nums[twoIndex], nums[i] ];
      twoIndex--;
      i--;
    }
  }
  return nums;
}

/*A slower solution
var sortColors = function(nums) {
    colors = [0, 0, 0];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            colors[0]++;
        }
        else if (nums[i] === 1) {
            colors[1]++;
        }
        else if (nums[i] === 2) {
            colors[2]++;
        }
    }
    
    let colorCount = 0;
    let result = [];
    for (let i = 0; i < colors.length; i++) {
        colorCount = colors[i];
        while (colorCount > 0) {
            result.push(i);
            colorCount--;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};
*/

console.log(sortColors([2,0,2,1,1,0]));
