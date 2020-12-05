/*
  Your friend is typing his name into the keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times

  Return True if it is possible that a name is long pressed




  Input:
  name = "saeed", typed = "ssaaedd"
  output: false
  'e' must have been pressed twice, but it wasn't in the typed output


  name = "alex", typed = "aaleex"
  output: true
  'a' and 'e' were long pressed

  name = "leelee", typed = "lleeelee"
  output: true

  name = "john", typed = "john"
  output: true
  long press is not necessary


  alex
  aaleex

  saeed
  ssaaedd
*/



/*        i
 * name:  saeed
 *
 *        j
 * typed: ssaaedd
 *
 * 1. do i and j match
 * 2a. can we increment both and still match?
 * 2b. increment j
 * 3. return false if no match
 *
 * Goal: both pointers reach last character and match
 *
 * name:  saeed
 * typed: ssaaedd
 *
 *                             Recursive Tree
 *                                  0,0
 *                      F1,1                  0,1
 *                                      1,2         F0,2
 *                                 F2,3     1,3
 *                                      2,4    F1,4
 *                                 F3,5    F2,5
 *
 * REFLECTION: Use smaller test cases for recursion and completely map out the recursion
*/

//This gives an exponential runtime worst case
var isLongPressedName = function(name, typed) {
  if (typed.length < name.length)
    return false;

  let i = 0, j = 0;
  while (i < name.length || j < typed.length) {
    if (name[i] !== typed[j]) {
      i--;
      if (name[i] !== typed[j])
        return false;
    }
    i++;
    j++;
  }
  return true;
}


//ANOTHER SOLUTION
function isLongPressedName2(name, typed) {
  let i = 0;
  let j = 0;

  if (typed.length < name.length) {
    return false;
  }

  const cache = {};

  function tryIt(i, j) {
    //base case
    let key = i + '_' + j;
    if (key in cache) {
      return cache[key];
    }
    
    if (i === name.length - 1 && j === typed.length - 1 && name[i] === typed[j]) {
      return true;
    }

    if (i >= name.length) {
      return tryIt(i - 1, j + 1);
    }

    if (j >= typed.length) {
      return false;
    }

    if (name[i] !== typed[j]) {
      return false;
    }

    //recursive case
    //something is wrong here by looking at above tree
    cache[key] = tryIt(i + 1, j + 1) || tryIt(i, j + 1);

  }

  return tryIt(0, 0);
}

console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("alex", "aaaleeexx"));


