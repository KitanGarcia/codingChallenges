/*
 * You are given an array of strings words and a string chars
 *
 * A string is good if it can be formed by characters from chars
 * Each character can only be used once
 *
 * Return the sum of lengths of all good strings in words
 *
 * Input: words = ["cat", "bt", "hat", "tree"], chars = "atach"
 * Output: 6
 * The strings that can be formed are "cat" and "hat" so the answer is 3 + 3
 *
 * Input: words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"
 * Output: 10
 * The strings that can be formed are "hello" and "world"
 * so the answer is 5 + 5
 */

function countCharacters(words, chars) {
  let sum = 0;
  let set = new Set();
  let goodWord = true; //word is good unless proven otherwise. If it stays good, add length to sum

  for (let i = 0; i < chars.length; i++) {
    set.add(chars[i]);
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!set.has(words[i][j])) {
        goodWord = false;
      }
    }
    if (goodWord) {
      sum += words[i].length;
    }
    goodWord = true;
  }
  return sum;
}

let words1 = ["cat", "bt", "hat", "tree"];
let chars1 = "atach";

let words2 = ["hello", "world", "leetcode"];
let chars2 = "welldonehoneyr";

console.log(countCharacters(words1, chars1));
console.log(countCharacters(words2, chars2));

/*
 * let result = 0;
 * let counts = {};
 *
 * for (let i = 0; i < chars.length; i
 */
