/*
1. Start with the full range of the array (0 to array length - 1).
2. Check the value at the middle of that range.
2. If mid matches target we return the mid index.
3. If the mid is larger than target we can eliminate the right half.
4. If the mid is less than target, we can eliminate the left half.
5. Adjust the range depending on which half if still active.
6. Repeat steps 2-5 until a match is found or the range is empty
7. If the range is empty, return -1.
*/

let input = [1,3,4,5,6,7,8,10,11,13,15,17,20,22];
let target = 17;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (target < array[mid]) {
      end = mid - 1;
    }
    else { //if target > mid
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(input, target));
