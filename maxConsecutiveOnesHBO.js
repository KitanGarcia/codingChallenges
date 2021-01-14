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

let input1 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 0];
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



/*
Given an array of 0s and 1s and an integer k, find the maximum number of 1s in a row, if at most k 0s are flipped to 1

input: [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0], k = 2
output: 10


input: [0, 1, 1, 1, 0, 0, 0, 1, 0], k = 2
output: 5

SLIDING WINDOW
*/
