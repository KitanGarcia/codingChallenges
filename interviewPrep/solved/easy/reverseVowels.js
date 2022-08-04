/*
 * Leetcode 345
 *Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

const reverseVowelsV2 = function (s) {
  let vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);

  let split = s.split("");
  let left = 0;
  let right = split.length - 1;
  let temp;

  while (left < right) {
    if (vowels.has(split[left]) && vowels.has(split[right])) {
      temp = split[left];
      split[left] = split[right];
      split[right] = temp;
      left++;
      right--;
    } else {
      if (!vowels.has(split[left])) {
        left++;
      }
      if (!vowels.has(split[right])) {
        right--;
      }
    }
  }
  return split.join("");
};

const reverseVowels = function (s) {
  let vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);

  let split = s.split("");
  let left = 0;
  let right = split.length - 1;
  let temp;

  while (left < right) {
    if (!vowels.has(split[left])) {
      left++;
    } else {
      while (!vowels.has(split[right])) {
        right--;
      }
      temp = split[left];
      split[left] = split[right];
      split[right] = temp;
      left++;
      right--;
    }
  }
  return split.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));

console.log(reverseVowelsV2("hello"));
console.log(reverseVowelsV2("leetcode"));
