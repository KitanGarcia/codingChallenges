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

var countCharacters = function(words, chars) {
    let result = 0;

    let counts = {};

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] in counts) {
        counts[chars[i]]++;
      } else {
        counts[chars[i]] = 1;
      }
    }

    for (let word of words) {
      //let countsCopy = counts;
      let countsCopy = deepObjectCopy(counts);

      let flag = true;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!(char in countsCopy)) {
          flag = false;
          break;
        }
        if (countsCopy[char] < 1) {
          flag = false;
          break;
        }

        countsCopy[char]--;
      }

      if (flag) {
        result += word.length;
      }
    }
    return result;
};

function deepObjectCopy(obj) {
  let copy = {};

  for (let key in obj) {
    copy[key] = obj[key];
  }

  return copy;
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
