/*
 *
 * Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".
 *
 * Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
 *
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 *
 *
 * Input: s = "a", t = "a"
 * Output: "a"
 */





var minWindowSubstring = function(s, t) {
  let min = "";
  let left = 0;

  // `right` is -1 since every loop, we start by expanding the right boundary
  // setting this to -1 ensures that we will check the first char on the first time
  let right = -1;
  let tCounts = {};


  // store characters we need in the substring with their counts
  // for example: "BAAC"; chars can be repeated
  for (let i = 0; i < t.length; i++) {
    if (tCounts[t[i]] == null) {
      tCounts[t[i]] = 1;
    }
    else {
      tCounts[t[i]] = tCounts[t[i]] + 1;
    }
  }

  // sets how many different characters we still have
  // for example: given the input "BAAC", we still have 3 different characters need to check
  let count = Object.keys(tCounts).length;

  while (right <= s.length) {
    
    //found a valid substring
    if (count === 0) {

      //try to shift left boundary to the right, this means the very left character will be removed
      //because of this, we need to check whats the effect by removing that character, 
      let current = s[left];

      // if this char is in our map, we'll need to find another one in the future
      if (tCounts[current] != null) {
        tCounts[current]++;
      }

      // * we must have the condition `>0` because for case like "BBBA...", count for B could be negative
      if (tCounts[current] > 0) {
        count++;    
      }

      let temp = s.substring(left, right+1);
      if (min == "") {
        min = temp;
      }
      else {
        min = min.length < temp.length ? min : temp;
      }

      left++;
    }

    //valid substring is not yet found
    else {
      right++;
      let current = s[right];

      //we have found a char common to both s and t
      //decrease the count for this character
      if (tCounts[current] !== null) {
        tCounts[current]--;
      }
      //if we found all necessary instances of that char, we need one less letter to char for
      if (tCounts[current] === 0) {
        count--;
      }
    }
  }
  return min;
};

let str = "ADOBECODEBANC";
let sub = "ABC";

console.log(minWindowSubstring(str, sub));
