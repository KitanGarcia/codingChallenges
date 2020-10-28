/*
 *  Homework 06 - Dynamic Programming
 *
 *
 *  Problem 1:  Max Consecutive Sum
 *
 *  Prompt:    Given an array of integers find the sum of consecutive
 *             values in the array that produces the maximum value.
 *
 *  Input:     Unsorted array of positive and negative integers
 *  Output:    Integer (max consecutive sum)
 *
 *  Example:   input = [6, -1, 3, 5, -10]
 *             output = 13 (6 + -1 + 3 + 5 = 13)
 *
 *
 */

// Time Complexity:
// Auxiliary Space Complexity:
function maxConsecutiveSum(arr) {
  //YOUR WORK HERE
}


/*
 *  BitFlip
 *
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made.
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 */

/*
 * keep track of current distance and max distance so work is not repeated
 * use left pointer and right pointer
 */
// Time Complexity:
// Auxiliary Space Complexity:
function bitFlip (arr, n) {
  //YOUR WORK HERE
}



////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// code for capturing console.log output
let record = [];
(function () {
  let log = console.log;
  console.log = function () {
    record = record.concat(Array.prototype.slice.call(arguments));
    log.apply(this, Array.prototype.slice.call(arguments));
  };
}());

console.log('maxConsecutiveSum Tests');
let testCount = [0, 0];

assert(testCount, 'should work on example input', () => {
  let example = maxConsecutiveSum([6,-1,3,5,-10]);
  return example === 13;
});

assert(testCount, 'should work on single-element input', () => {
  let example = maxConsecutiveSum([5]);
  return example === 5;
});

assert(testCount, 'should return 0 for empty input', () => {
  let example = maxConsecutiveSum([]);
  return example === 0;
});

assert(testCount, 'should work on longer input', () => {
  let example = maxConsecutiveSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  return example === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Bit Flip Tests');
testCount = [0, 0];

assert(testCount, 'should handle example case', () => {
  let example = bitFlip([0,1,1,1,0,1,0,1,0,0], 2);
  return example === 7;
});

assert(testCount, 'should handle smaller edge case where flip is allowed', () => {
  let example = bitFlip([0], 1);
  return example === 1;
});

assert(testCount, 'should handle smaller edge case where flip is not allowed', () => {
  let example = bitFlip([0], 0);
  return example === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
    return false;
  for(let i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

// function for checking if arrays contain same elements
// (do not need to be in the same order)
function arraysMatching(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  } else {
    let lib = {};
    for (let i = 0; i < arr1.length; i++){
      lib[arr1[i]] = true;
    }
    for (let j = 0; j < arr2.length; j++){
      if (lib[arr2[j]] === undefined){
        return false;
      }
    }
    return true;
  }
}

// custom assert function to handle tests
// Array count : keeps track out how many tests pass and how many total
//   in the form of a two item array i.e., [0, 0]
// String name : describes the test
// Function test : performs a set of operations and returns a boolean
//   indicating if test passed
function assert(count, name, test){
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
