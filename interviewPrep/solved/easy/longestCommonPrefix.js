/*
 * Leetcode 14
 *Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

const longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  let prefix = "";

  // length of shortest word
  let maxPrefixLength = Math.min(...strs.map((str) => str.length));

  // iterate until the length of the shortest word
  for (let i = 0; i < maxPrefixLength; i++) {
    // get the chars of the first string
    let char = strs[0][i];
    // check that all strings have that char at the same index
    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
