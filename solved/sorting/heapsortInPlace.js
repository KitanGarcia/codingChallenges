//Given an unsorted array of integers, return the array sorted using heapsort and a max heap with space complexity O(1)

//utilize input array as storage for the heap as well
//add items to heap using swaps
//then remove all values
//use max heap to have values at the end when we remove from the heap??????????????
//
//
//
/*
function heapsort(arr) {
  //we know heap condition is met when there is only one item in it
  //start at 1 to represent index 0
  let heapLength = 1;

  function getParent(child) {
    return Math.floor((child - 1) / 2);
  }

  function getChild(parent) {
    let left = 2 * parent + 1;

    //if left is last item or larger than right
    if (left >= heapLength - 1 || arr[left] >= arr[left] + 1) {
      return left;
    }
    return left + 1; //right index;

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
    [ arr[0], arr[heapLength - 1] ] = [ arr[heapLength - 1], arr[0] ];
    heapLength--; //decrease length so largest values are always at the end

    //perform bubble down for new top to satisfy heap condition (children smaller than parents)
    let parent = 0;
    let child = getChild(parent); //get index of larger of the 2 children
    while (child < heapLength && arr[parent] < arr[child]) {
      [ arr[parent], arr[child] ] = [ arr[child], arr[parent] ];

      //update parent with child and get child of updated parent
      parent = child;
      child = getChild(parent);
    }
  }
  return arr;
}
*/


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


console.log(heapsort([9, 1, 6, 19, 0, 18, 9, 5, 6, 3, 22, -10, -8, 2]));
