/*
Given an array of 0s and 1s and an integer n, find the maximum number of 1s in a row, if at most n 0s are flipped to 1

input: [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0], k = 2
output: 10


input: [0, 1, 1, 1, 0, 0, 0, 1, 0], k = 2
output: 5

SLIDING WINDOW
*/


/*
 * Hunting Phase
 * Continue while finding 1s or able to toggle 0s to 1s
 * Ends when R goes off the array
 *
 * Catch-up Phase
 * When toggles > n
 *
 *
 * Move R forward and decrease toggle every time we find a 0.
 * If our toggle hits 0 and R encounters another 0, set max = R - L and move L up
 *
 *  0  1  1  1  0  1  0  1  0  0                n = 2
 *  LR                                          toggles = 0
 *  L  R                                        toggles = 1
 *  L     R                                     toggles = 1
 *  L        R                                  toggles = 1
 *  L           R                               toggles = 2
 *  L              R                            toggles = 2
 *  L                 R                         toggles = 3  Now, we enter catch up phase since toggles > n. Now we move L up. Current max is 5 - 0 + 1
 *     L              R                         toggles = 2  L moves to a 1 so we decrease toggles
 *
 *
 *
 *
 * for n = 2
 * [0, 1, 1, 1, 0, 1, 0, 1, 0, 0]
 *  L  R
 *  L     R
 *  L        R
 *  L           R                          5
 *     L        R
 *     L           R
 *     L              R
 *     L                 R                 7
 *                 L        R              4
 *                       L     R           2
 */

function maxOnesBitFlip(array, n) {
  let left = 0;
  let right = 0;
  let max = 0;

  let toggles = 0;
  while (right < array.length) {
    if (array[right] === 0) {
      toggles++;
    }
    right++;

    while (toggles > n) {
      if (array[left] === 0) {
        toggles--;
      }
      left++;
    }
    max = Math.max(max, right - left);
  }
  return max;
}

let input1 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 0];
let input9 = [0, 1, 1, 1, 0, 1, 0, 1, 0, 0];
console.log(maxOnesBitFlip(input1, 2));
console.log(maxOnesBitFlip(input9, 2));



/*
Given an array of 0s and 1s, find the maximum number of 1s in a row

input: [0, 1, 1, 1, 0, 1, 1, 1, 1, 0]
output: 4
*/

function maxConsecutiveOnes(array) {
  if (!Array.isArray(array)) {
    return -1;
  }

  let max = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
    }
    if (array[i] === 0 || i >= array.length - 1 ) {
      if (max < count) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}

let input2 = [0, 1, 1, 1, 1, 0, 1];
let input3 = [1, 1, 1, 1];
let input4 = [1, 0, 0, 0];
let input5 = [0, 0, 0, 0];
let input6 = [0];
let input7 = [1];
let input8 = [];
console.log(maxConsecutiveOnes(input1));
/*
console.log(maxConsecutiveOnes(input2));
console.log(maxConsecutiveOnes(input3));
console.log(maxConsecutiveOnes(input4));
console.log(maxConsecutiveOnes(input5));
console.log(maxConsecutiveOnes(input6));
console.log(maxConsecutiveOnes(input7));
console.log(maxConsecutiveOnes(input8));
*/



