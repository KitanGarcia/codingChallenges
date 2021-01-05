/*Given an unsorted array of integers, return the array sorted using quicksort. The quicksort algorithm must be performed in place without using extra space (outside the call stack)
 *
 * input: array of integers
 * output: array of integers
 *
 *
 *
    [ 0, 3, 8, 2, 10, 7 ]
    [ 0, 3, 2, 7, 10, 8 ]
    [ 0, 2, 3, 7, 10, 8 ]
    [ 0, 2, 3, 7, 8, 10 ]
    [ 0, 2, 3, 7, 8, 10 ]
 */


function quicksortInPlace(arr) {

  //want to create a "pile" less than the pivot and a "pile" greater than the pivot
  //then place the pivot between the less than and greater than piles


  //create helper function taking in indices
  function divide(start, end) {
    //base case: check if we're done
    if (start >= end) {
      return;
    }

    //use mid to distinguish lower half from upper half
    //mid grows as we find more values lower than the pivot
    let mid = start;




    //choosing pivot at end is convenient, as we do swaps for all the other values
    //if array is in descending order, last item will always be smallest value
    

    //if pivot is smallest or largest value, we don't actually divide the two portions to roughly half the size
    //this leads to worst case scenario of O(n^2)
    
    //randomly select element in range and swap it with last value
    //prevents worst case runtime of n^2 for descending arrays
    let randomIndex = Math.floor(Math.random() * (end - start)) + start;
    [ arr[randomIndex], arr[end] ] = [ arr[end], arr[randomIndex] ];



    //loop through rest of the elements
    //each time, compare arr[i] with the pivot, arr[end]
    //if it is greater than pivot, continue on with i
    //if it's less, we need to grow the lesser section. We achieve this with the swap
    
    //after this for loop, we have one section lesser than the pivot and one greater than the pivot
    for (let i = start; i < end; i++) {
      if (arr[i] < arr[end]) {
        [ arr[i], arr[mid] ] = [ arr[mid], arr[i] ];
        mid++;
      }
    }

    [ arr[mid], arr[end] ] = [ arr[end], arr[mid] ]; //this is where we put the pivot in it's correct spot
    console.log(arr);
    divide(start, mid - 1);
    divide(mid + 1, end);
  }
  divide(0, arr.length - 1);
  return arr;
}


console.log(quicksortInPlace([7, 3, 8, 2, 10, 0]));
console.log(quicksortInPlace([10, 9, 8, 7, 6, 5, 4, 3]));
