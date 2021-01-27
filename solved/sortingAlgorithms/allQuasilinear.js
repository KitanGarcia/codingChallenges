//work is input array
let quicksort = function(work) {
  //return array when it is of length 1 or 0
  if (work.length <= 1) {
    return work;
  }

  //define pivot as middle element
  let pivotIndex = Math.floor(work.length / 2);
  let pivot = work[pivotIndex];

  //define arrays before and after pivot
  let before = [];
  let after = [];

  //push everything <= pivot on before array and everything > pivot on after array
  for (let i = 0; i < work.length; i++) {
    //don't act on pivot element
    if (i !== pivotIndex) {
      if (work[i] <= pivot) {
        before.push(work[i]);
      }
      else {
        after.push(work[i]);
      }
    }
  }
  return quicksort(before).concat(pivot).concat(quicksort(after));
}

let input = [3, 4, 2, 7, 5, 1, 6, 9]
console.log(quicksort(input));


//[3, 4, 2, 7, 5, 1, 6, 9]
//pivot = 5
//[3, 4, 2, 1] 5 [7, 6, 9]
//pivot = 4 and 6
//[3, 2, 1] 4 5 6 [7, 9]
//pivot = 2 and 7
//[1] 2 [3] 4 5 6 7 [9]
//pivot = 1, 3, 9
//1 2 3 4 5 6 7 9


//MERGESORT
let joinArrays = function(arr1, arr2) {
  //set up 2 pointers
  let p1 = 0;
  let p2 = 0;
  let result = []; //array that we will build up


  if (!arr1) {
    return arr2;
  }
  else if (!arr2) {
    return arr1;
  }

  //if there are indices to traverse, compare arr1 and arr2 and place the lesser values in the result
  while (arr1[p1] && arr2[p2]) {
    //stable: elements that appear earlier in array if equal to others are represented earlier in the result
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    }
    else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  //pointer reaches end of one array first, add the rest of the other array to result
  if (p1 === arr1.length) {
    result = result.concat(arr2.slice(p2));
  }
  else if (p2 === arr2.length) {
    result = result.concat(arr1.slice(p1));
  }
  return result;
}

let mergeSort = function(input) {
  if (input.length <= 1) {
    return input;
  }
  let midIndex = Math.floor(input.length / 2);
  let left = input.slice(0, midIndex);
  let right = input.slice(midIndex, input.length);

  return joinArrays(mergeSort(left), mergeSort(right));
}







//HEAP SORT
//utilize input array as storage for the heap as well
//add items to heap using swaps
//then remove all values
//use max heap to have values at the end when we remove from the heap??????????????

function heapsort(arr) {
  //we know heap condition is met when there is only one item in it
  //start at 1 to represent index 0
  let heapLength = 1;

  function getParent(child) {
    return Math.floor((child - 1) / 2);
  }

  function getChild(parent) {
    let left = parent * 2 + 1;

    //if left is last item or larger than right
    if (left >= heapLength - 1 || arr[left] >= arr[left + 1]) {
      return left;
    }
    return left + 1; //right index
  }

  //build heap one index at a time until arr.length is reached
  while (heapLength < arr.length) {
    heapLength++;

    //set parent and child indices to keep track of where we are
    //start at last index
    let child = heapLength - 1;
    let parent = getParent(child);

    //bubble up will perform swaps on parent if child is greater until we get to the top of the heap
    //or the parent is greater than the child
    //this continues iterating until heap condition is met

    //move the largest value to the 0 index and make sure each parent is larger than the child; heapifying
    while (child > 0 && arr[parent] < arr[child]) {
      [ arr[parent], arr[child] ] = [ arr[child], arr[parent] ];

      //update child with parent and get parent of updated child to continue checking/heapifying
      child = parent;
      parent = getParent(child);
    }
  }

  //now we have a heap with max value at 0 and each parent is larger than its children
  //now we can sort


  //loop to remove each item from heap
  //since largest value is at 0, we swap with the last index to have largest value last
  while (heapLength > 1) {
    //heaps can only be added to and removed from the last position
    [arr[0], arr[heapLength - 1]] = [arr[heapLength - 1], arr[0]];
    heapLength--; //decrease length so largest values are always at the end

    //perform bubble down for new top to satisfy heap condition (children smaller than parents)
    let parent = 0;
    let child = getChild(parent); //get index of larger of the 2 children

    while (child < heapLength && arr[parent] < arr[child]) {
      [arr[parent], arr[child]] = [arr[child], arr[parent]];

      //update parent with child and get child of updated parent
      parent = child;
      child = getChild(parent);
    }
  }
  return arr;
}
