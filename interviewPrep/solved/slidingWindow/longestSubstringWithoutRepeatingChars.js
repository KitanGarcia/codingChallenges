/*
 * Leetcode 3
  Given a string s, find the length of the longest 
  substring
   without repeating characters.

   

  Example 1:

  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
  Example 2:

  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  Example 3:

  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = {};
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let char = s[right];
    // Collision
    if (map.hasOwnProperty(char) && map[char] >= left) {
      left = map[s[right]] + 1;
    } else {
      max = Math.max(max, right - left + 1);
    }

    map[s[right]] = right;
    right++;
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
