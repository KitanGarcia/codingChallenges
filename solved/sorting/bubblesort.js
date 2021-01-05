/*
 * Time Complexity:
 * Space Complexty:
 *
 *
 * Traverse through array
 * Each time we find two elements where the first is greater than the 2nd, swap the 2 elements
 * Large elements get sent to the right side and small to the left side
 * Sorted region grows into unsorted region from the end of the array to the start
 *
 * For future traversals, just travel to beginning of sorted region instead of end of input
 *
 * 3 9 1 4 7
 * 3 1 9 4 7
 * 3 1 4 9 7
 * 3 1 4 7 s9
 * 1 3 4 s7 9
 * 1 3 s4 7 9
 * 1 s3 4 7 9
 * s1 3 4 7 9
 */

function bubblesort(input) {
  let endIndex = input.length; //how far we need to check inside the input array
  let swap; //check to see if swap occurred to optimize

  //iterate until endIndex = 0
  while (endIndex--) {
    swap = false;
    for (let i = 0; i < endIndex; i++) {
      //if current is greater than next element, swap them
      if (input[i] > input[i + 1]) {
        [ input[i], input[i + 1] ] = [ input[i + 1], input[i] ];
        swap = true;
      }
    }

    //if no swap occurred, then the whole array was sorted
    if (!swap) {
      break;
    }
  }
  return input;
}

console.log(bubblesort([3, 9, 1, 4, 7]));
