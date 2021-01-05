/*
 * Time Complexity: 
 * Space Complexity: 
 *
 *
 *
 * Use sorted region and unsorted region
 * Go through entire unsorted region
 *   Find minimum element
 *   Switch with first element of unsorted
 *   Add 1 to sorted region
 *
 *
 *   3 9 1 4 7
 *   1s 9 3 4 7
 *   1 3s 9 4 7
 *   1 3 4s 9 7
 *   1 3 4 7s 9
 *   1 3 4 7 9s
 */

function selectionsort(input) {
  //iterate through unsorted region
  for (let i = 0; i < input.length; i++) {
    let min = input[i];
    let minIndex = i;

    //find minimum in all elements of first for loop from current index onward
    for (let j = i + 1; j < input.length; j++) {
      //find new minimums
      if (input[j] < min) {
        min = input[j];
        minIndex = j;
      }
    }
    //swap the elements
    input[minIndex] = input[i];
    input[i] = min;
  }
  return input;
}

console.log(selectionsort([3, 9, 1, 4, 7]));
