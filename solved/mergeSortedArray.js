/*
 * Given 2 sorted arrays of integers, return a combined sorted array
 */

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0; //pointer to track arr1
  let j = 0; //pointer to track arr2

  const totalElements = arr1.length + arr2.length;

  // while (i < arr1.length && j < arr2.length) <--- this also works 
  while (i + j < totalElements) {
    if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
      result.push(arr1[i]);
      i++;
    }
    else {
      result.push(arr2[j]);
      j++
    }
  }
  return result;
}

console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4]));
console.log(mergeSortedArrays([1, 2, 3, 4], []));
console.log(mergeSortedArrays([], []));
