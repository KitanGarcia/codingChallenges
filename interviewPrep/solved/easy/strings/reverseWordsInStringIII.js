/*
 * Leetcode 557
 *Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 */

const reverseWords = (s) => {
  // split up by whitespace
  let split = s.split(" ");

  // Reverses a string
  const reverseString = (word) => {
    let result = "";

    for (let i = word.length - 1; i >= 0; i--) {
      result += word[i];
    }
    return result;
  };

  for (let i = 0; i < split.length; i++) {
    split[i] = reverseString(split[i]);
  }

  // join by spaces
  return split.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
