/*
 *  Homework 12 - Binary Heap
 *
 *  Prompt: Create a Binary Heap class
 *
 *  The Heap will take in the following input:
 *
 *            type:   {String} - 'min' for minheap, 'max' for maxheap
 *
 *  The Heap will have the following properties:
 *
 *         storage:   {Array} - storage of numbers within heap
 *            type:   {String} - indicates whether heap is a minheap or maxheap
 *
 *  The Heap will have the following methods:
 *
 *        compare:   compares two input numbers and returns if the heap
 *                   condition is met.
 *
 *                   Input:      parent {Number} - index at parent
 *                   Input:      child {Number} - index at child
 *                   Output:     {Boolean}
 *
 *         insert:   inserts a number into the heap.
 *
 *                    Input:     {Number}
 *                   Output:     {undefined}
 *
 *           peek:   returns the top item in the heap
 *
 *                   Input:      N/A
 *                   Output:     {Number}
 *
 *         remove:   removes the top element from the heap
 *
 *                    Input:      N/A
 *                   Output:     {Number}
 */

'use strict';


class Heap {

 constructor(type = 'min') {
   this.storage = [];
   this.type = type;
 }

 // Time Complexity: O(1)
 // Auxiliary Space Complexity: O(1)
 compare(parent, child) {
   if (this.type === 'min') {
     if (this.storage[parent] < this.storage[child]) {
       return true;
     }
   }
   else if (this.type === 'max') {
     if (this.storage[parent] > this.storage[child]) {
       return true;
     }
   }
   return false;
 }


 // Time Complexity:
 // Auxiliary Space Complexity:
 insert(value) {
   // YOUR WORK HERE
 }


 // Time Complexity:
 // Auxiliary Space Complexity:
 peek() {
   return this.storage[0];
 }


 // Time Complexity: O(log(N))
 // Auxiliary Space Complexity: O(1)
 // Time Complexity:
 // Auxiliary Space Complexity:
 remove() {
   // YOUR WORK HERE
 }

}




////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}


function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}


console.log('Heap Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
 let heap = new Heap();
 return typeof heap === 'object';
});

assert(testCount, 'has storage property', () => {
 let heap = new Heap();
 return heap.hasOwnProperty('storage');
});

assert(testCount, 'has type property', () => {
 let heap = new Heap();
 return heap.hasOwnProperty('type');
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap compare method');
testCount = [0, 0];

assert(testCount, 'has compare method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.compare) === '[object Function]';
});

assert(testCount, 'returns true for minheap if element at first argument index is less than element at second argument index', () => {
 let heap = new Heap('min');
 heap.storage.push(1);
 heap.storage.push(10);
 return heap.compare(0, 1) === true;
});

assert(testCount, 'returns false for minheap if element at first argument index is greater than element at second argument index', () => {
 let heap = new Heap('min');
 heap.storage.push(10);
 heap.storage.push(1);
 return heap.compare(0, 1) === false;
});

assert(testCount, 'return true for maxheap if element at first argument index is greater than element at second argument index', () => {
 let heap = new Heap('max');
 heap.storage.push(10);
 heap.storage.push(1);
 return heap.compare(0, 1) === true;
});

assert(testCount, 'return false for maxheap if element at first argument index is less than element at second argument index', () => {
 let heap = new Heap('max');
 heap.storage.push(1);
 heap.storage.push(10);
 return heap.compare(0, 1) === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap insert method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.insert) === '[object Function]';
});

assert(testCount, 'should be able to insert a single element', () => {
 let heap = new Heap();
 heap.insert(5);
 return heap.storage[0] === 5;
});

assert(testCount, 'minimum value should be on top of a minheap', () => {
 let heap = new Heap('min');
 heap.insert(5);
 heap.insert(10);
 heap.insert(7);
 heap.insert(1);
 heap.insert(8);
 heap.insert(6);
 return heap.storage[0] === 1;
});

assert(testCount, 'maximum value should be on top of a minheap', () => {
 let heap = new Heap('max');
 heap.insert(5);
 heap.insert(10);
 heap.insert(7);
 heap.insert(1);
 heap.insert(8);
 heap.insert(6);
 return heap.storage[0] === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap peek method');
testCount = [0, 0];

assert(testCount, 'has peek method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.peek) === '[object Function]';
});

assert(testCount, 'should return the top element of the heap', () => {
 let heap = new Heap();
 heap.storage.push(1);
 heap.storage.push(5);
 heap.storage.push(10);
 return heap.peek() === 1;
});

assert(testCount, 'should return the smallest element for a minheap', () => {
 let heap = new Heap();
 heap.insert(2);
 heap.insert(5);
 heap.insert(10);
 heap.insert(1);
 return heap.peek() === 1;
});

assert(testCount, 'should return the largest element for a maxheap', () => {
 let heap = new Heap('max');
 heap.insert(2);
 heap.insert(5);
 heap.insert(10);
 heap.insert(1);
 return heap.peek() === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap remove method');
testCount = [0, 0];

assert(testCount, 'has remove method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.remove) === '[object Function]';
});

assert(testCount, 'should be able to remove a single element', () => {
 let heap = new Heap();
 heap.insert(5);
 heap.remove();
 return heap.storage.length === 0;
});

assert(testCount, 'should be able to remove and return min', () => {
 let heap = new Heap('min');
 heap.storage = [1,2,7,4,9,10,8,6];
 let example = heap.remove();
 return example === 1 && arraysEqual([2,4,7,6,9,10,8], heap.storage);
});

assert(testCount, 'should be able to remove and return max', () => {
 let heap = new Heap('max');
 heap.storage = [10,9,6,8,3,5,2,7];
 let example = heap.remove();
 return example === 10 && arraysEqual([9,8,6,7,3,5,2], heap.storage);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
