/*
 *  Homework 02 - Frequency Count
 */

/*
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 *
 * Unique
 *
 * Given an array of integers, return an array with all duplicates removed.*
 *
 * Parameters
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */

'use strict';

function unique(arr) {
  let set = new Set();
  arr.forEach((element) => {
    set.add(element);
  });
  return Array.from(set);
}


/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

function wordCount(sentence) {
  if (sentence.length === 0) {
    return {};
  }

  let noPunctuation = sentence.replace(/[^\w\s]/g, ""); //removes anything that's not a digit, letter, whitespace
  let noCaps = noPunctuation.replace(/[A-Z]/g, l => l.toLowerCase());//replace caps with lowercase
  let words = noCaps.split(" ");

  let hash = {};
  words.forEach((word) => {
    if (hash.hasOwnProperty(word)) {
      hash[word]++;
    }
    else {
      hash[word] = 1;
    }
  });
  return hash;
}


/**
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 */

function rgb(string) {
  //get min of r, g, and b. That is the answer
  let r = 0;
  let b = 0;
  let g = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "r") {
      r++;
    }
    else if (string[i] === "b") {
      b++;
    }
    else if (string[i] === "g") {
      g++;
    }
  }
  return Math.min(r, g, b);
}



/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 *
 */
function missingNumber(n, arr) {
  let set = new Set();
  let result = [];

  arr.forEach(element => set.add(element));

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }
  return result;
}



/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 */

function letterSort(string) {

  // First write the swap function, which is just a helper function to swap values of the array.
  function swap(array, leftIndex, rightIndex) {
    [ array[leftIndex], array[rightIndex] ] = [ array[rightIndex], array[leftIndex] ];
  }

  function quicksort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    let pivot = partition(array, left, right);
    if (left < pivot - 1) {
      quicksort(array, left, pivot - 1); //perform quicksort with pivot - 1 as the new right
    }
    if (right > pivot) {
      quicksort(array, pivot, right); //perform quicksort pivot as the new left
    }
    return array;
  }


  /* Two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, that are in the wrong order relative to each other. The inverted elements are then swapped. 
Here the numerical values of left and right are continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair. 
That is, although the left <= right (which is being made sure by the outer while loop) the actual elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.
*/
  function partition(array, left, right) {
    var pivot = Math.floor((left + right) / 2);

    while (left < right) {
      while (array[left] < array[pivot]) {
        left++
      }
      while (array[right] > array[pivot]) {
        right--
      }

      if (left <= right) {
        swap(array, left, right);
        left++
        right--
      }
    }
    return left;
  }

  let letters = string.split("");
  let sortedArray = quicksort(letters, 0, letters.length - 1);
  return sortedArray.join("");
}



/**
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Upper case characters should count as lower case, and do not include spaces
 * ... as characters.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 */

 function characterMode(string) {
   let hash = {};

   //need to make everything lowercase
   for (let i = 0; i < string.length; i++) {
     if (string[i] !== ' ') {
       if (!hash.hasOwnProperty(string[i])) {
         hash[string[i].toLowerCase()] = 1;
       }
       else {
         hash[string[i].toLowerCase()]++;
       }
     }
   }

   let max = 0;
   let maxLetter = '';
   //find max count
   for (let letter in hash) {
     if (max < hash[letter]) {
       max = hash[letter];
     }
   }
   //get all letters with max count
   for (let letter in hash) {
     if (hash[letter] === max) {
       maxLetter += letter;
     }
   }
   return maxLetter;
 }



/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 *
 * store all digits in hash table (worst case would be O(10) space or O(1)
 */


function sortDigits(n) {
  let hash = {};
  let current = n;
  let digit;
  let string = "";
  while (current > 0) {
    digit = current % 10;
    current = Math.floor(current / 10);
    if (digit !== 0) {
      if (hash[digit]) {
        hash[digit]++;
      }
      else {
        hash[digit] = 1;
      }
    }
  }
  for (const [key, value] of Object.entries(hash)) {
    string += key.repeat(value);
  }
  return parseInt(string);
}



/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

function getDuplicates(arr) {
  let hash = {};
  arr.forEach((element) => {
    if (hash.hasOwnProperty(element)) {
      hash[element]++;
    }
    else {
      hash[element] = 1;
    }
  });

  let returnArray = [];
  for (const key in hash) {
    if (hash[key] > 1) {
      returnArray.push(parseInt(key));
    }
  }
  return returnArray;
}



/**
 *  Anagram Pair
 *
 *  Given two strings, determine if the strings are anagrams of one another.
 *
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

function anagramPair(string1, string2) {
  let hash1 = {};
  let hash2 = {};

  if (string1.length !== string2.length) {
    return false;
  }

  for (let i = 0; i < string1.length; i++) {
    if (hash1.hasOwnProperty(string1[i])) {
      hash1[string1[i]]++;
    }
    else {
      hash1[string1[i]] = 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (hash2.hasOwnProperty(string2[i])) {
      hash2[string2[i]]++;
    }
    else {
      hash2[string2[i]] = 1;
    }
  }

  for (let key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }
  return true;
}



/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 */


 function anagramPalindrome(string) {
   //palindromes can be formed when the letters have even counts or all but one do
   let hash = {};
   for (let i = 0; i < string.length; i++) {
     if (hash.hasOwnProperty(string[i])) {
       hash[string[i]]++;
     }
     else {
       hash[string[i]] = 1;
     }
   }

   let oddCount = 0;
   for (let key in hash) {
     if (hash[key] % 2 > 0) {
       oddCount++;
     }
   }
   return oddCount > 1 ? false : true;
 }




////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


let testCount;

console.log('Unique tests');
testCount = [0, 0];

assert(testCount, 'should return unique values from sorted list with duplicates', () => {
  let example = unique([1, 2, 4, 4, 5, 6])
  return example !== undefined && arraysEqual(example.sort((a, b) => {return a-b;}), [1,2,4,5,6]);
});

assert(testCount, 'should return single value for list with all duplicates', () => {
  let example = unique([2,2,2,2,2,2,2]);
  return example !== undefined && arraysEqual(example, [2]);
});

assert(testCount, 'should return unique values from unsorted list with duplicates', () => {
  let example = unique([1,2,3,1,2])
  return example !== undefined && arraysEqual(example.sort((a, b) => {return a-b;}), [1,2,3]);
});

assert(testCount, 'should return an empty list from empty input', () => {
  let example = unique([])
  return example !== undefined && arraysEqual(example, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Word Count');
testCount = [0, 0];

assert(testCount, 'should return an object with each word and its frequency', () => {
  let example = wordCount("The cat and the hat.")
  return example !== undefined &&
  example['the'] === 2 &&
  example['cat'] === 1 &&
  example['and'] === 1 &&
  example['hat'] === 1;
});

assert(testCount, 'should return object with each word excluding punctuations', () => {
  let example = wordCount("It's a man, it's a plane, it's superman!")
  return example !== undefined &&
  example['its'] === 3 &&
  example['a'] === 2 &&
  example['man'] === 1 &&
  example['plane'] === 1 &&
  example['superman'] === 1;
});

assert(testCount, 'should return empty object for empty string input', () => {
  let example = wordCount("")
  return example !== undefined && Object.keys(example).length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('rgb Count');
testCount = [0, 0];

assert(testCount, 'should return number correct number of rgb from input', () => {
  let example = rgb('rgbrgb');
  return example !== undefined && example === 2;
});

assert(testCount, 'should return correct number of rgb from input despite characters out of sequence', () => {
  let example = rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg');
  return example !== undefined && example === 7;
});

assert(testCount, 'should return 0 as output for no number of rgb', () => {
  let example = rgb('bbrr');
  return example !== undefined && example === 0;
});

assert(testCount, 'should return 0 for empty input', () => {
  let example = rgb('');
  return example !== undefined && example === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Missing Number Tests');
testCount = [0, 0];

assert(testCount, 'should return [3] for input of [1, 4, 2]', () => {
  let example = missingNumber(4, [1, 4, 2]);
  return example !== undefined && arraysEqual(example, [3]);
});

assert(testCount, 'should return [2, 3, 5, 8] for input of [4, 7, 1, 6]', () => {
  let example = missingNumber(8, [4, 7, 1, 6]);
  return example !== undefined && arraysEqual(example, [2, 3, 5, 8]);
});

assert(testCount, 'should return [3, 5] for input of [6, 4, 2, 1]', () => {
  let example = missingNumber(6, [6, 4, 2, 1]);
  return example !== undefined && arraysEqual(example, [3, 5]);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Letter Sort Tests');
testCount = [0, 0];

assert(testCount, "should return 'ehllo' for input 'hello'", () => {
  let example = letterSort("hello")
  return example !== undefined && example === "ehllo";
});

assert(testCount, "should return 'abdehiortw' for input of 'whiteboard'", () => {
  let example = letterSort("whiteboard")
  return example !== undefined && example === "abdehiortw";
});

assert(testCount, "should return 'eno' for input 'one'", () => {
  let example = letterSort("one")
  return example !== undefined && example === "eno";
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Character Mode Tests');
testCount = [0, 0];

assert(testCount, "should return 'l' for input 'hello'", () => {
  let example = characterMode("hello");
  return example !== undefined && example === "l";
});

assert(testCount, "should return 'a' when input is 'A walk in the park'", () => {
  let example = characterMode("A walk in the park");
  return example !== undefined && example === "a";
});

assert(testCount, "should return 'no' when input is 'noon'", () => {
  let example = characterMode("noon");
  return example !== undefined && example === "no";
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Sort Digits Tests');
testCount = [0, 0];

assert(testCount, "should return '789' when input is '8970'", () => {
  let example = sortDigits(8970);
  return example !== undefined && example === 789;
});

assert(testCount, "should return '23445' when input is '32445'", () => {
  let example = sortDigits(32445);
  return example !== undefined && example === 23445;
});

assert(testCount, "should return '111' when input is '10101'", () => {
  let example = sortDigits(10101);
  return example !== undefined && example === 111;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Get Duplicates Tests');
testCount = [0, 0];

assert(testCount, "should return '[2]' when input is '[1, 2, 4, 2]'", () => {
  let example = getDuplicates([1, 2, 4, 2]);
  return example !== undefined && arraysEqual(example, [2]);
});

assert(testCount, "should return '[3, 2]' or '[2, 3]' when input is '[3, 2, 3, 2, 3, 3, 4]'", () => {
  let example = getDuplicates([3, 2, 3, 2, 3, 3, 4]);
  return example !== undefined && arraysEqual(example, [2,3]) || arraysEqual(example, [3,2]);
});

assert(testCount, "should return '[]' when input is '[1, 2, 3, 4]'", () => {
  let example = getDuplicates([1, 2, 3, 4]);
  return example !== undefined && arraysEqual(example, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Anagram Pair Tests');
testCount = [0, 0];

assert(testCount, "should return true when input is 'cat, act'", () => {
  let example = anagramPair("cat", "act");
  return example !== undefined && example === true;
});

assert(testCount, "should return false when input is 'cat, dog'", () => {
  let example = anagramPair("cat", "dog");
  return example !== undefined && example === false;
});

assert(testCount, "should return false when input is 'racecar, aaccrres'", () => {
  let example = anagramPair("racecar", "aaccrres");
  return example !== undefined && example === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Anagram Palindrome Tests');
testCount = [0, 0];

assert(testCount, "should return true when input is 'carrace'", () => {
  let example = anagramPalindrome("carrace");
  return example !== undefined && example === true;
});

assert(testCount, "should return false when input is 'cat'", () => {
  let example = anagramPalindrome("cat");
  return example !== undefined && example === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



// captures all elements that were printed to the console
//
// input: method {Function} - function to execute
// input: {Array} - parameters for the function
// output: {Array} - array of all the captured logs
function captureLog(method, ...params) {
  let record = [];
  const log = console.log;
  console.log = (...args) => {
    record = record.concat(...args);
  };
  method(...params);
  console.log = log;
  return record;
}

// compare if two flat arrays are equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}



// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
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
