/*
 * Time Complexity:
 * Space Complexity:
*/


//divide into two regions, sorted and unsorted. Sorted will start at 0 and grow into unsorted region
//check if element is in first position
//check if element is less than element immediately to its left
//
/* 3 9 1 4 7
/* s3 9 1 4 7
 * 3 9s 1 4 7
 * 3 9s 9 4 7
 * 3 3s 9 4 7
 * 1 3 9s 4 7
 * 1 3 9s 9 7
 * 1 3 4s 9 7
 * 1 3 4s 9 9
 * 1 3 4 7 9s
*/
function insertionSort(input) {
  //iterate through input
  for (let i = 0; i < input.length; i++) {
    let temp = input[i];

    //pointer and while loop to iterate backward through elements before i
    let pointer = i;
    //while pointer > 0 or elements before temp element are greater than temp
    while (pointer > 0 && temp < input[pointer - 1]) {
      input[pointer] = input[pointer - 1]; //shift one element to the right
      pointer--;
    }
    input[pointer] = temp; //temp is now in sorted region
  }
  return input;
}

console.log(insertionSort([3, 9, 1, 4, 7]));
